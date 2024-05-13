import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { updateComptability } from "../../utlities/updateCompatability";

export default function Complete() {
    const { id } = useParams();
    const [totalPoints, setTotalPoints] = useState(0)
    const [results, setResults] = useState<any>([])
    const [bool, setBool] = useState(false)

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
            setResults(data)
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

useEffect(() => {
    updateComptability(id, bool);
}, [bool, id]);

useEffect(() => {
    setBool(totalPoints > 130);
}, [totalPoints]);


console.log(bool);


  return (
    <div>
        <h3>Congrats on finishing the questionnaire!</h3>
        <h2>You achieved a comptability score of: {totalPoints}</h2>
        <Link to="/">
            <button className="all-btns">Start Over</button>
        </Link>
        <br />
        <br />
        {results && results.answers && results.points && (
            <>
         <h4>Your results:</h4>
        <div>Name: {results.name}</div>
        <div>Your Age: {results.her_age}</div>
        <div>His Age: {results.his_age}</div>
        <div>Q1- {results.answers[0]} - {results.points[0]} points</div>
        <div>Q2- {results.answers[1]} - {results.points[1]} points</div>
        <div>Q3- {results.answers[2]}</div>
        <div>Q4- {results.answers[3]} - {results.points[2]} points</div>
        <div>Q5- {results.answers[4]} - {results.points[3]} points</div>
        <div>Q6- {results.answers[5]} - {results.points[4]} points</div>
            </>
        )}
    </div>
  )
}
