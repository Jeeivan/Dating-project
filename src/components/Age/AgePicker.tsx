import { useState, useEffect } from "react";
import Picker from 'react-mobile-picker'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { updateForm } from "../../utlities/updateForm";

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
        console.log("his age: ", hisAge);
        if (selectedOption) {
            setAnswer(selectedOption.title)
            setPoints(calculatePoints(herAge, hisAge))
        }
    }
    
    useEffect(() => {
        updateAnswer(pickerValue)
        // eslint-disable-next-line
    }, [pickerValue])


    function calculatePoints(herAge: number, hisAge: number) {
        const ageDifference = hisAge - herAge
        let points = 0;
        
        if (herAge >= 18 && herAge <= 21) {
            if (ageDifference <= 2) points = 4;
            else if (ageDifference === 3) points = 3;
            else if (ageDifference >= 4 && ageDifference <= 5) points = 1;
            else if (ageDifference >= 5 && ageDifference <= 8) points = 0;
            else if (ageDifference > 8) points = 0;
        } else if (herAge >= 22 && herAge <= 24) {
            if (ageDifference <= 2) points = 4;
            else if (ageDifference === 3) points = 4;
            else if (ageDifference >= 4 && ageDifference <= 5) points = 3;
            else if (ageDifference >= 5 && ageDifference <= 8) points = 2;
            else if (ageDifference > 8) points = 0;
        } else if (herAge >= 25 && herAge <= 29) {
            if (ageDifference <= 2) points = 4;
            else if (ageDifference === 3) points = 4;
            else if (ageDifference >= 4 && ageDifference <= 5) points = 4;
            else if (ageDifference >= 5 && ageDifference <= 8) points = 2;
            else if (ageDifference > 8) points = 0;
        } else if (herAge >= 30 && herAge <= 35) {
            if (ageDifference <= 2) points = 4;
            else if (ageDifference === 3) points = 4;
            else if (ageDifference >= 4 && ageDifference <= 5) points = 4;
            else if (ageDifference >= 5 && ageDifference <= 8) points = 3;
            else if (ageDifference > 8) points = 2;
        } else if (herAge >= 36) {
            if (ageDifference <= 2) points = 4;
            else if (ageDifference === 3) points = 4;
            else if (ageDifference >= 4 && ageDifference <= 5) points = 4;
            else if (ageDifference >= 5 && ageDifference <= 8) points = 4;
            else if (ageDifference > 8) points = 3;
        }
        console.log(points);
        
        return points;
    }

    

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

