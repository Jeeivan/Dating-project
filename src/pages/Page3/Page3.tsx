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

    function updateAnswer(event: any) {
        const selectedIndex = event.target.selectedIndex
        setAnswer(jobs[selectedIndex])
        setPoints(jobPoints[selectedIndex])
        setIsDisabled(false)
    }

    const jobs: string[] = [
        "Software Engineer",
        "Nurse",
        "Marketing Manager",
        "Graphic Designer",
        "Sales Representative",
        "Teacher",
        "Accountant",
        "Customer Service Representative",
        "Data Analyst",
        "Project Manager",
        "Lawyer",
        "Human Resources Manager",
        "Electrician",
        "Chef",
        "Financial Analyst",
        "Web Developer",
        "Administrative Assistant",
        "Pharmacist",
        "Social Media Manager",
        "Mechanical Engineer",
        "Construction Worker",
        "Content Writer",
        "Veterinarian",
        "Physical Therapist",
        "Operations Manager",
        "Dental Hygienist",
        "Artist",
        "Police Officer",
        "Architect",
        "Biomedical Engineer"
    ];
    const jobPoints = [
        30, 20, 35, 25, 15, 20, 25, 15, 35, 40,
        45, 30, 20, 20, 35, 30, 15, 40, 30, 35,
        20, 25, 45, 40, 45, 25, 20, 35, 40, 35
    ];
    

  return (
    <div className="page-container">
        <h3>What is his occupation?</h3>
        <select className="all-inputs" onChange={updateAnswer}>
            {jobs.map((job, index) => (
                <option key={index} value={index}>{job}</option>
            ))}
        </select>
        <Link to={`/4/${id}`}>
            <button disabled={isDisabled} onClick={updateForm}>Submit</button>
        </Link>
    </div>
  )
}
