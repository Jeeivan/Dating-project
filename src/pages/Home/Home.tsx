import Form from "../../components/Form/Form"
import { useState } from "react"

export default function Home() {
    const [results, setResults] = useState([])

async function fetchFormData() {
    try {
        const response = await fetch(`http://localhost:3006/form/display/`)
        const data = await response.json()

        if (response.ok) {
            setResults(data)
            console.log(data);
        } else {
            console.log('Failed to fetcg form data');
        }
    } catch (error) {
        console.error("Error fetching form data", error)
    }
}

  return (
    <div>
        <div>Questionnaire</div>
        <Form />
    </div>
  )
}
