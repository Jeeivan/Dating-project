import { useState } from "react"

export default function DataByUser() {
    const [userId, setUserId] = useState('')
    const [results, setResults] = useState<any>([])
    console.log(userId);
    

    async function fetchDataByUser() {
        try {   
            console.log("userid-", userId);
            const response = await fetch (`http://localhost:3006/form/display/single/${userId}`)
            const data = await response.json()
            

            if (response.ok) {
                setResults(data)
            } else {
                console.log("Error fetching data by UserId");
            }
        } catch (error) {
            console.error("Error fetching data by userId", error)
        }
    }

    return (
        <div>
            <input type="text" placeholder='Enter user ID' value={userId} onChange={(e) => setUserId(e.target.value)}/>
            <button className='all-btns' onClick={fetchDataByUser}>Search</button>
            {results && (
                <div>
                    <p>Name- {results.name}</p>
                    <p>Her age- {results.her_age}</p>
                    <p>His age- {results.his_age}</p>
                    <p>Answers- {results.answers}</p>
                    <p>Points- {results.points}</p>
                </div>
            )}
        </div>
    );
    
}
