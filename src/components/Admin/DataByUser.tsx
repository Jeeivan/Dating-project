import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function DataByUser() {
    const [userId, setUserId] = useState('')
    const [results, setResults] = useState<any>([])
    const { id } = useParams();
    console.log(userId);
    console.log(id);
    
    useEffect(() => {
        if (id) {
            setUserId(id)
            fetchDataByUser()
        }
    }, [id])
    

    async function fetchDataByUser() {
        try {   
            console.log("userid-", userId);
            const response = await fetch (`http://localhost:3006/form/display/single/${userId || id}`)
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
                    <br />
                    <p>Answers-</p>
                {results.answers?.map((answer: string, index: number) => (
                    <div key={index}>
                        <p>{answer}</p>
                    </div>
                ))}
                <br />
                <p>Points-</p>
                {results.points?.map((point: any, index: any) => (
                    <div key={index}>
                        <p>{point}</p>
                    </div>
                ))}
                <br />
                </div>
            )}
        </div>
    );
    
}
