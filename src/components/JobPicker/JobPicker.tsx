import { useState, useEffect } from "react";
import Picker from 'react-mobile-picker'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { updateForm } from "../../utlities/updateForm";

interface JobPickerProps {
    questionNum: string
}

export const JobPicker: React.FC<JobPickerProps> = ({questionNum}) => {
    const { id } = useParams();

    const [pickerValue, setPickerValue] = useState({
        job: 'Please Select'
      })
      const [answer, setAnswer] = useState('')
      const [points, setPoints] = useState(0)


    const selections: any = {
        job: [
          { title: 'Accountant', points: 4 },
          { title: 'Administrative Assistant', points: 4 },
          { title: 'Architect', points: 4 },
          { title: 'Artist', points: 1 },
          { title: 'Biomedical Engineer', points: 4 },
          { title: 'Chef', points: 1 },
          { title: 'Construction Worker', points: 2 },
          { title: 'Content Writer', points: 4 },
          { title: 'Customer Service Representative', points: 4 },
          { title: 'Data Analyst', points: 4 },
          { title: 'Dental Hygienist', points: 4 },
          { title: 'Dentist', points: 3 },
          { title: 'Doctor', points: 3 },
          { title: 'Electrician', points: 2 },
          { title: 'Entertainer', points: 1 },
          { title: 'Financial Analyst', points: 1 },
          { title: 'Graphic Designer', points: 3 },
          { title: 'Human Resources Manager', points: 4 },
          { title: 'Influencer', points: 1 },
          { title: 'Lawyer', points: 3 },
          { title: 'Marketing Manager', points: 1 },
          { title: 'Mechanical Engineer', points: 4 },
          { title: 'Nurse', points: 3 },
          { title: 'Operations Manager', points: 3 },
          { title: 'Personal Trainer', points: 1 },
          { title: 'Pharmacist', points: 3 },
          { title: 'Physical Therapist', points: 3 },
          { title: 'Police Officer', points: 1 },
          { title: 'Project Manager', points: 4 },
          { title: 'Sales Representative', points: 1 },
          { title: 'Social Media Manager', points: 2 },
          { title: 'Software Engineer', points: 4 },
          { title: 'Teacher', points: 4 },
          { title: 'Unemployed', points: 1 },
          { title: 'Veterinarian', points: 4 },
          { title: 'Web Developer', points: 4 }
        ]
      };
      

    function updateAnswer(option: any) {
        const selectedOption = selections.job.find((jobOption: any) => jobOption.title === option.job)
        console.log(selectedOption);
        if (selectedOption) {
            setAnswer(selectedOption.title)
            setPoints(selectedOption.points)
        }
    }
    
    useEffect(() => {
        updateAnswer(pickerValue)
        // eslint-disable-next-line
    }, [pickerValue])

    console.log("Answer- ", answer);
    console.log("Points- ", points);
    

  return (
    <div>
        <Picker value={pickerValue} onChange={setPickerValue}>
            <Picker.Column key="job" name="job">
                {selections.job.map((option: any) => (
                    <Picker.Item key={option.title} value={option.title}>
                        {option.title}
                    </Picker.Item>
                ))}
            </Picker.Column>
        </Picker>
        <Link to={`/${questionNum}/${id}`}>
        <button onClick={() => updateForm(id, answer, points)}>Submit</button>
        </Link>
    </div>
)
}

