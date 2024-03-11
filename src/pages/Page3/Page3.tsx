import { Link } from "react-router-dom";

export default function Page3() {
    const handleButtonClick = (points: number, answer: string) => {
        localStorage.setItem('points', points.toString())
        localStorage.setItem('q3-answer', answer)
    }

    const q3_answers: string[] = ['Within 10min', 'Within 30min', 'Within 1 hour', '1 hour +']

  return (
    <div>
        <h3>How long does he take to respond to messages on average?</h3>
        <Link to="/4">
            <button onClick={() => handleButtonClick(10, q3_answers[0])}>{q3_answers[0]}</button>
        </Link>
        <Link to="/4">
            <button onClick={() => handleButtonClick(20, q3_answers[1])}>{q3_answers[1]}</button>
        </Link>
        <Link to="/4">
            <button onClick={() => handleButtonClick(30, q3_answers[2])}>{q3_answers[2]}</button>
        </Link>
        <Link to="/4">
            <button onClick={() => handleButtonClick(40, q3_answers[3])}>{q3_answers[3]}</button>
        </Link>
    </div>
  )
}
