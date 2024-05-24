import { useState, useEffect } from "react";
import Picker from 'react-mobile-picker'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { updateForm } from "../../utlities/updateForm";
import { calculatePoints } from "../../utlities/calculatePoints";

interface Selection {
    title: string;
    points: number;
}

interface AgePickerProps {
    questionNum: string;
    selections: Selection[];
}

export const AgePicker: React.FC<AgePickerProps> = ({questionNum, selections}) => {
    const { id } = useParams();

    const [pickerValue, setPickerValue] = useState({
        job: 'Please Select'
      })
      const [answer, setAnswer] = useState('')
      const [points, setPoints] = useState(0)
      const herAgeString : string | null = localStorage.getItem('herAge')
      const herAge :number = herAgeString ? parseInt(herAgeString) : NaN;
      console.log("Her Age: ", herAge);

      
    function updateAnswer(option: any) {
        const selectedOption = selections.find((jobOption: any) => jobOption.title === option.job)
        const hisAgeString = selectedOption?.title
        const hisAge :number = hisAgeString ? parseInt(hisAgeString) : NaN;
        console.log("His age: ", hisAge);
        if (selectedOption) {
            setAnswer(selectedOption.title)
            setPoints(calculatePoints(herAge, hisAge))
        }
    }
    
    useEffect(() => {
        updateAnswer(pickerValue)
        // eslint-disable-next-line
    }, [pickerValue])
    

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

