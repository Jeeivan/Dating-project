import { Link } from "react-router-dom";
import { useState } from "react";

export default function Page2() {
    const [age, setAge] = useState("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value)
    }

    const handleButtonClick = () => {
        localStorage.setItem("q2-answer", age)
    }

  return (
    <div>
        <h3>What is his age?</h3>
        <input type="number" value={age} onChange={handleInputChange}/>
        <Link to="/3">
            <button onClick={handleButtonClick}>Submit</button>
        </Link>
    </div>
  )
}
