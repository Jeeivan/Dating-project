import { useState } from "react"
import AllData from "../../components/Admin/AllData"
import DataByQestion from "../../components/Admin/DataByQestion"
import DataByUser from "../../components/Admin/DataByUser"

export default function Admin() {
    const [selectedOption, setSelectedOption] = useState('')

    const handleSelectChange = (e: any) => {
        setSelectedOption(e.target.value)
    }

  return (
    <div>
        <p>Congrats you have been deemed worthy to see this data</p>
        <select className="all-inputs" value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select what you would like to filter by</option>
            <option value="allData">See All Data</option>
            <option value="allAnswersByQ">See All Answers by Question</option>
            <option value="answersByUser">See Answers by User</option>
        </select>
        {selectedOption && (
            <div>
                {selectedOption === 'allData' && <AllData/>}
                {selectedOption === 'allAnswersByQ' && <DataByQestion/>}
                {selectedOption === 'answersByUser' && <DataByUser/>}
            </div>
        )}
    </div>
  )
}
