import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: '',
        sexuality: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:3006/form/submit/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData
                }),
            })

            if (response.ok) {
                console.log("Form submitted successfully");
                window.location.href = '/'
            } else {
                console.log("Error submitting form");
            }
        } catch (error) {
            console.error("Error submitting form:", error)
        }
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                What is your name?
                <input type="text" name='name' value={formData.name} onChange={handleChange}/>
            </label>
            <br />
            <label>
                What is your gender?
                <input type="text" name='gender'value={formData.gender} onChange={handleChange}/>
            </label>
            <br />
            <label>
                What is your age?
                <input type="number" name='age' value={formData.age} onChange={handleChange}/>
            </label>
            <br />
            <label>
                What is your sexuality?
                <input type="text" name='sexuality' value={formData.sexuality} onChange={handleChange}/>
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
