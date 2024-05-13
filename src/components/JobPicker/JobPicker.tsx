import { useState, useEffect } from "react";
import Picker from 'react-mobile-picker'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

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
    //   const selections: any = {
    //     job: [
    //       'Please Select',
    //         'Accountant',
    //         'Administrative Assistant',
    //         'Architect',
    //         'Artist',
    //         'Biomedical Engineer',
    //         'Chef',
    //         'Construction Worker',
    //         'Content Writer',
    //         'Customer Service Representative',
    //         'Data Analyst',
    //         'Dental Hygienist',
    //         'Electrician',
    //         'Financial Analyst',
    //         'Graphic Designer',
    //         'Human Resources Manager',
    //         'Lawyer',
    //         'Marketing Manager',
    //         'Mechanical Engineer',
    //         'Nurse',
    //         'Operations Manager',
    //         'Pharmacist',
    //         'Physical Therapist',
    //         'Police Officer',
    //         'Project Manager',
    //         'Sales Representative',
    //         'Social Media Manager',
    //         'Software Engineer',
    //         'Teacher',
    //         'Veterinarian',
    //         'Web Developer'
    //     ]
    // };
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

    const selections: any = {
        job: [
            { title: 'Accountant', points: 30 },
            { title: 'Administrative Assistant', points: 20 },
            { title: 'Architect', points: 35 },
            { title: 'Artist', points: 25 },
            // Add other jobs with their corresponding points here
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
        <button onClick={updateForm}>Submit</button>
        </Link>
    </div>
)
}

//     <Picker value={pickerValue} onChange={setPickerValue}>
//     {Object.keys(selections).map(job => (
//       <Picker.Column key={job} name={job}>
//         {selections[job].map((option: any) => (
//           <Picker.Item key={option} value={option}>
//             {option}
//           </Picker.Item> 
//         ))}
//       </Picker.Column>
//     ))}
//   </Picker>