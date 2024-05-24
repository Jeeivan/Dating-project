import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { updateForm } from "../../utlities/updateForm";
import { AllPickers } from "../JobPicker/Picker";

interface Selection {
    title: string;
    points: number;
}

interface SelectionsProps {
    question: string;
    questionNum: string;
    selections: Selection[];
}

export const Selections: React.FC<SelectionsProps> = ({ question, questionNum, selections }) => {
    const { id } = useParams();
    const [answer, setAnswer] = useState('')
    const [points, setPoints] = useState(0)
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
        if (selectedIndex > 0) {
            setAnswer(selections[selectedIndex - 1].title)
            localStorage.setItem('herAge', selections[selectedIndex - 1].title)
            setPoints(selections[selectedIndex - 1].points)
        }
    }



  return (
    <div className="page-container">
    <h3>{question}</h3>
    {isMobile ? (
      <AllPickers questionNum={questionNum} selections={selections}/>
    ) : (
      <>
      <select className="all-inputs" onChange={updateAnswer}>
      <option value="">Please Select</option>
      {selections.map((option, index) => (
          <option key={index} value={index}>{option.title}</option>
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
