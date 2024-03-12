import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
    const [name, setName] = useState('')
    const [formId, setFormId] = useState(null)

// async function fetchFormData() {
//     try {
//         const response = await fetch(`http://localhost:3006/form/display/`)
//         const data = await response.json()

//         if (response.ok) {
//             setResults(data)
//             console.log(data);
//         } else {
//             console.log('Failed to fetcg form data');
//         }
//     } catch (error) {
//         console.error("Error fetching form data", error)
//     }
// }

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
            console.log(data);
            console.log(data._id);
            setFormId(data._id)
            console.log("Form created successfully");
            console.log(formId);
            
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
        <input type="text" value={name} onChange={handleInputChange}/>
        <Link to={formId ? `/1/${formId}` : "#"}>
            <button onClick={createForm}>Press here to start</button>
        </Link>
    </div>
  )
}
