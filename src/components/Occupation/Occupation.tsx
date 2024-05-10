import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import Picker from 'react-mobile-picker'

interface OccupationProps {
    inputName: string,
    questionNum: string
}

export const Occupation: React.FC<OccupationProps> = ({inputName, questionNum}) => {
    const { id } = useParams();
    const [answer, setAnswer] = useState('')
    const [points, setPoints] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)
    const [pickerValue, setPickerValue] = useState({
        job: 'Please Select'
      })
      const selections: any = {
        job: ['Please Select', "Software Engineer",
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
        "Biomedical Engineer"]
      }

      console.log(pickerValue.job);
      
      console.log(answer);
      
      

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

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedIndex = event.target.selectedIndex
        setAnswer(jobs[selectedIndex - 1])
        setPoints(jobPoints[selectedIndex - 1])
        setIsDisabled(false)
    }

    // function handleAnswer() {
    //     const selectedJob = pickerValue.job
    //     console.log(selectedJob);
    //     setAnswer(selectedJob)
    //     const index = jobs.indexOf(selectedJob)
    //     console.log(index);
    //     setPoints(jobPoints[index])
    //     setIsDisabled(false)
    // }

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
    <h3>What is {inputName} occupation?</h3>
    <select className="all-inputs" onChange={updateAnswer}>
        <option value="">Select Job</option>
        {jobs.map((job, index) => (
            <option key={index} value={index}>{job}</option>
        ))}
    </select>

    <Picker value={pickerValue} onChange={setPickerValue}>
      {Object.keys(selections).map(job => (
        <Picker.Column key={job} name={job}>
          {selections[job].map((option: any) => (
            <Picker.Item key={option} value={option}>
              {option}
            </Picker.Item> 
          ))}
        </Picker.Column>
      ))}
    </Picker>
    <Link to={`/${questionNum}/${id}`}>
        <button disabled={isDisabled} onClick={updateForm}>Submit</button>
    </Link>
</div>
  )
}
