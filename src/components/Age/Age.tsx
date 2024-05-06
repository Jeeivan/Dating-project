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
    console.log(fieldName);
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value)
    }

    async function updateForm() {
        try {
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

  return (
    <div className="page-container">
        <h3>What is {inputName} age?</h3>
        <input className="all-inputs" type="number" value={age} onChange={handleInputChange}/>
        <Link to={`/${questionNum}/${id}`}>
            <button className="all-btns" onClick={updateForm}>Submit</button>
        </Link>
    </div>
  )
}
