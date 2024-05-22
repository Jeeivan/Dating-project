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
      'Dentist',
      'Doctor',
      'Electrician',
      'Entertainer',
      'Financial Analyst',
      'Graphic Designer',
      'Human Resources Manager',
      'Influencer',
      'Lawyer',
      'Marketing Manager',
      'Mechanical Engineer',
      'Nurse',
      'Operations Manager',
      'Personal Trainer',
      'Pharmacist',
      'Physical Therapist',
      'Police Officer',
      'Project Manager',
      'Sales Representative',
      'Social Media Manager',
      'Software Engineer',
      'Teacher',
      'Unemployed',
      'Veterinarian',
      'Web Developer'
    ];
    
    const jobPoints: number[] = [
      4,  // Accountant
      4,  // Administrative Assistant
      4,  // Architect
      1,  // Artist
      4,  // Biomedical Engineer
      1,  // Chef
      2,  // Construction Worker
      4,  // Content Writer
      4,  // Customer Service Representative
      4,  // Data Analyst
      4,  // Dental Hygienist
      3,  // Dentist
      3,  // Doctor
      2,  // Electrician
      1,  // Entertainer
      1,  // Financial Analyst
      3,  // Graphic Designer
      4,  // Human Resources Manager
      1,  // Influencer
      3,  // Lawyer
      1,  // Marketing Manager
      4,  // Mechanical Engineer
      3,  // Nurse
      3,  // Operations Manager
      1,  // Personal Trainer
      3,  // Pharmacist
      3,  // Physical Therapist
      1,  // Police Officer
      4,  // Project Manager
      1,  // Sales Representative
      2,  // Social Media Manager
      4,  // Software Engineer
      4,  // Teacher
      1,  // Unemployed
      4,  // Veterinarian
      4   // Web Developer
    ];
    

  return (
    <div className="page-container">
    <h3>What is {inputName} job?</h3>

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
