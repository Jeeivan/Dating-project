import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState } from "react";

export default function Page4() {
    const { id } = useParams();
    const [answer, setAnswer] = useState('')
    const [points, setPoints] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)

    async function updateForm() {
        try {
            const response = await fetch(`http://localhost:3006/form/add/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    answers: answer,
                    points: points
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

    function updateAnswer(index: number) {
        setAnswer(q4_answers[index])
        setPoints(q4_points[index])
        setIsDisabled(false)
    }

    const q4_answers: string[] = ['Funny', 'Loyal', 'Romantic'];
    const q4_points: number[] = [10, 20, 30]


  return (
    <div>
        <h3>How do his friends describe him?</h3>
        {q4_answers.map((answer, index) => (
            <button key={index} onClick={() => updateAnswer(index)}>{answer}</button>
        ))}
        <br />
        <br />
        <Link to={`/complete/${id}`}>
            <button disabled={isDisabled} onClick={updateForm}>Submit</button>
        </Link>
    </div>
  )
}
