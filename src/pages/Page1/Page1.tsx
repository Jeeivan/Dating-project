import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from 'react-router-dom';

export default function Page1() {
    const { id } = useParams();
    const [age, setAge] = useState("")

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
                    her_age: age
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
    <div>
        <h3>What is your age?</h3>
        <input type="number" value={age} onChange={handleInputChange}/>
        <Link to={`/2/${id}`}>
            <button onClick={updateForm}>Submit</button>
        </Link>
    </div>

  )
}
