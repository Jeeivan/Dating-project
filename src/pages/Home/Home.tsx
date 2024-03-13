import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
    const [name, setName] = useState('')
    const [formId, setFormId] = useState(null)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
}

useEffect(() => {
    console.log("Form ID:", formId);
    
}, [formId])

async function createForm() {
    try {
        const response = await fetch(`http://localhost:3006/form/submit/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name
            }),
        })

        if (response.ok) {
            const data = await response.json()
            setFormId(data._id)
            console.log("Form created successfully");
            setIsDisabled(false)
            setIsSubmitDisabled(true)
        } else {
            console.error("Error creating form")
        }
    } catch (error) {
        console.error("Error creating form", error)
    }
}


  return (
    <div>
        <div>Questionnaire</div>
        <h3>What is your name?</h3>
        <input type="text" value={name} onChange={handleInputChange} disabled={isSubmitDisabled}/>
            <button onClick={createForm} disabled={isSubmitDisabled}>Submit</button>
            <br />
            <br />
        <Link to={formId ? `/1/${formId}` : "#"}>
            <button disabled={isDisabled}>Press here to start the questionnaire</button>
        </Link>
    </div>
  )
}
