import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

interface AgeProps {
    fieldName: string,
    questionNum: string,
    inputName: string
}

export const Age: React.FC<AgeProps> = ({ fieldName, questionNum, inputName}) => {
    const { id } = useParams();
    const [age, setAge] = useState("")

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAge(e.target.value)
    }

    async function updateForm() {
        try {
            console.log("input: ", fieldName);
            
            const response = await fetch(`http://localhost:3006/form/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    [fieldName]: age
                    
                }),
            })
    
            if (response.ok) {
                console.log("Form updated successfully");
            } else {
                console.error("Error updating form")
            }
        } catch (error) {
            console.error("Error updating form", error)
        }
    }

    const ageOptions = []
    for (let i = 18; i <= 100; i ++) {
        ageOptions.push(i)
    }
    console.log(ageOptions);
    

  return (
    <div className="page-container">
        <h3>What is {inputName} age?</h3>
        <select className="all-inputs" value={age} onChange={handleInputChange}>
            <option value="">Select Age</option>
            {ageOptions.map((age) => (
                <option value={age} key={age}>{age}</option>
            ))}
        </select>
        <Link to={`/${questionNum}/${id}`}>
            <button className="all-btns" onClick={updateForm}>Submit</button>
        </Link>
    </div>
  )
}
