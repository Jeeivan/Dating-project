import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState } from "react";

export default function Page3() {
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
        setAnswer(q3_answers[index])
        setPoints(q3_points[index])
        setIsDisabled(false)
    }

    const q3_answers: string[] = ['Within 10min', 'Within 30min', 'Within 1 hour', '1 hour +']
    const q3_points: number[] = [10, 20, 30, 40]

  return (
    <div>
        <h3>How long does he take to respond to messages on average?</h3>
        {q3_answers.map((answer, index) => (
            <button key={index} onClick={() => updateAnswer(index)}>{answer}</button>
        ))}
        <br />
        <br />
        <Link to={`/4/${id}`}>
            <button disabled={isDisabled} onClick={updateForm}>Submit</button>
        </Link>
    </div>
  )
}
