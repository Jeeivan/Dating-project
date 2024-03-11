import { Link } from "react-router-dom";
import { useState } from "react";

export default function Page1() {
    const [age, setAge] = useState("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value)
    }

    const handleButtonClick = () => {
        localStorage.setItem("q1-answer", age)
    }

  return (
    <div>
        <h3>What is your age?</h3>
        <input type="number" value={age} onChange={handleInputChange}/>
        <Link to="/2">
            <button onClick={handleButtonClick}>Submit</button>
        </Link>
    </div>

  )
}
