import React, { useEffect, useState } from 'react'

export default function AllData() {
    const [allData, setAlldata] = useState([])

    async function fetchAllData() {
        try {
            const response = await fetch(`http://localhost:3006/form/display`)
            const data = await response.json()

            if (response.ok) {
                setAlldata(data)
            } else {
                console.log("Failed to fetch all data");
            }
        } catch (error) {
            console.error("Error fetching all data", error)
        }
    }

    useEffect(() => {
        fetchAllData()
    }, [])

  return (
    <div>
        {allData.map((data, index) => (
            <div key={index}>
                <p>{(data as any).name}</p>
                <p>User ID- {(data as any)._id}</p>
                <p>Answers- {(data as any).answers}</p>
                <p>Points- {(data as any).points}</p>
                <p>Her Age- {(data as any).her_age}</p>
                <p>His Age- {(data as any).his_age}</p>
                <br />
            </div>
        ))}
    </div>
  )
}
