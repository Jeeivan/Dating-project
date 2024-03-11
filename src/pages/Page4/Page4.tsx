import { Link } from "react-router-dom";

export default function Page4() {
    let current_points: number = Number(localStorage.getItem('points'))

    const handleButtonClick = (points: number, answer: string) => {
        localStorage.setItem('points', (current_points + points).toString())
        localStorage.setItem('q4-answer', answer);
    };

    const q4_answers: string[] = ['Funny', 'Loyal', 'Romantic'];


  return (
    <div>
        <h3>How do his friends describe him?</h3>
        <Link to="/complete">
        <button onClick={() => handleButtonClick(10, q4_answers[0])}>{q4_answers[0]}</button>
        </Link>
        <Link to="/complete">
        <button onClick={() => handleButtonClick(20, q4_answers[1])}>{q4_answers[1]}</button>
        </Link>
        <Link to="/complete">
        <button onClick={() => handleButtonClick(30, q4_answers[2])}>{q4_answers[2]}</button>
        </Link>
    </div>
  )
}
