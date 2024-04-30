import { useState } from "react"

export default function DataByQuestion() {
  const [results, setResults] = useState([])
  const [number, setNumber] = useState(0)

  async function fetchDataByQuestion() {
    try {
      const response = await fetch(`http://localhost:3006/form/display/q${number}`)
      const data = await response.json()

      if (response.ok) {
        setResults(data)
      } else {
        console.log("Failed to fetch data by question");
      }
    } catch (error) {
      console.error("Error fetching data by question", error)
      
    }
  }

  return (
    <div>
        <input type="number" placeholder='Enter question number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
        <button className='all-btns' onClick={fetchDataByQuestion}>Search</button>
        {results.map((result, index) => (
          <div key={index}>
            <p>{result}</p>
          </div>
        ))}
    </div>
  )
}
