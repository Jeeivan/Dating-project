import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState } from "react";

interface PageProps {
    question: string,
    answers: string[],
    point: number[],
    nextPage: string;
}

export const Page: React.FC<PageProps> = ({ question, answers, point, nextPage }) => {
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

    const q4_answers: string[] = answers;
    const q4_points: number[] = point


  return (
    <div className="page-container">
        <h3>{question}</h3>
        {q4_answers.map((answer, index) => (
            <button className="all-btns" key={index} onClick={() => updateAnswer(index)}>{answer}</button>
        ))}
        <br />
        <br />
        <Link to={`/${nextPage}/${id}`}>
            <button disabled={isDisabled} onClick={updateForm}>Submit</button>
        </Link>
    </div>
  )
}