import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import {JobPicker} from "../JobPicker/JobPicker";
import { updateForm } from "../../utlities/updateForm";

interface OccupationProps {
    inputName: string,
    questionNum: string
}

export const Occupation: React.FC<OccupationProps> = ({inputName, questionNum}) => {
    const { id } = useParams();
    const [answer, setAnswer] = useState('')
    const [points, setPoints] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
      
      console.log(answer);
      
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
      })
      

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedIndex = event.target.selectedIndex
        setAnswer(jobs[selectedIndex - 1])
        setPoints(jobPoints[selectedIndex - 1])
        setIsDisabled(false)
    }

    const jobs: string[] = [
      'Accountant',
      'Administrative Assistant',
      'Architect',
      'Artist',
      'Biomedical Engineer',
      'Chef',
      'Construction Worker',
      'Content Writer',
      'Customer Service Representative',
      'Data Analyst',
      'Dental Hygienist',
      'Electrician',
      'Financial Analyst',
      'Graphic Designer',
      'Human Resources Manager',
      'Lawyer',
      'Marketing Manager',
      'Mechanical Engineer',
      'Nurse',
      'Operations Manager',
      'Pharmacist',
      'Physical Therapist',
      'Police Officer',
      'Project Manager',
      'Sales Representative',
      'Social Media Manager',
      'Software Engineer',
      'Teacher',
      'Veterinarian',
      'Web Developer'
  ];
  
    const jobPoints = [
        30, 20, 35, 25, 15, 20, 25, 15, 35, 40,
        45, 30, 20, 20, 35, 30, 15, 40, 30, 35,
        20, 25, 45, 40, 45, 25, 20, 35, 40, 35
    ];

  return (
    <div className="page-container">
    <h3>What is {inputName} occupation?</h3>

    {isMobile ? (
      <JobPicker questionNum={questionNum}/>
    ) : (
      <>
      <select className="all-inputs" onChange={updateAnswer}>
      <option value="">Please Select</option>
      {jobs.map((job, index) => (
          <option key={index} value={index}>{job}</option>
      ))}
  </select>
    <Link to={`/${questionNum}/${id}`}>
        <button onClick={() => updateForm(id, answer, points)}>Submit</button>
    </Link>
    </>
    )}
</div>
  )
}
