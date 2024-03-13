import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function Complete() {
    const { id } = useParams();
    const [totalPoints, setTotalPoints] = useState(0)

    async function fetchFormData() {
    try {
        const response = await fetch(`http://localhost:3006/form/display/single/${id}`)
        const data = await response.json()

        if (response.ok) {
            let sumPoints: number = 0
            const pointsArray: number[] = data.points
            for (let i = 0; i < pointsArray.length; i++) {
                sumPoints += pointsArray[i]
            }
            setTotalPoints(sumPoints)
        } else {
            console.log('Failed to fetch form data');
        }
    } catch (error) {
        console.error("Error fetching form data", error)
    }
}

useEffect(() => {
    fetchFormData()
}, [id])

  return (
    <div>
        <h3>Congrats on finishing the questionnaire!</h3>
        <h2>You achieved a comptability score of: {totalPoints}</h2>
        <Link to="/">
            <button>Start Over</button>
        </Link>
    </div>
  )
}
