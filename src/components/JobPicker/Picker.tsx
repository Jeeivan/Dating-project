import { useState, useEffect } from "react";
import Picker from 'react-mobile-picker'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { updateForm } from "../../utlities/updateForm";

interface Selection {
    title: string;
    points: number;
}

interface JobPickerProps {
    questionNum: string;
    selections: Selection[];
}

export const AllPickers: React.FC<JobPickerProps> = ({questionNum, selections}) => {
    const { id } = useParams();

    const [pickerValue, setPickerValue] = useState({
        job: 'Please Select'
      })
      const [answer, setAnswer] = useState('')
      const [points, setPoints] = useState(0)

      

    function updateAnswer(option: any) {
        const selectedOption = selections.find((jobOption: any) => jobOption.title === option.job)
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
                {selections.map((option: any) => (
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

