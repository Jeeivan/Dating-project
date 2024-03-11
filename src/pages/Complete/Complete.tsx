import { Link } from "react-router-dom";

export default function Complete() {
    const results = localStorage.getItem('points')

    const handleStartOver = () => {
        localStorage.clear()
    }

  return (
    <div>
        <h3>Congrats on finishing the questionnaire!</h3>
        <h2>You achieved a comptability score of: {results}</h2>
        <Link to="/">
            <button onClick={handleStartOver}>Start Over</button>
        </Link>
    </div>
  )
}
