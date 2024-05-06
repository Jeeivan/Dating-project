import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState } from "react";

export default function First() {
    const { id } = useParams();
    const [message, setMessage] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }

    async function updateForm() {
        try {
            const response = await fetch(`http://localhost:3006/form/add/message/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    answers: message
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
        <h3>What was his first message?</h3>
        <textarea className="message-input" value={message} onChange={handleInputChange}> </textarea>
        <Link to={`/line/${id}`}>
            <button className="all-btns" onClick={updateForm}>Submit</button>
        </Link>
    </div>
  )
}
