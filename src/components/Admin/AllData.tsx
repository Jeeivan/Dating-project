import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AllData() {
    const [allData, setAlldata] = useState<any>([])

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

    console.log(allData);
    

  return (
    <div>
        {allData.map((data: any, index: any) => (
            <div className={data.green_flag ? 'card-container green-background' : 'card-container red-background'} key={index}>
                <div className='card'>
                <p>{data.name}</p>
                <p>User ID- <Link to={`/databyuser/${data._id}`}>{data._id}</Link></p>
                <br />
                <p>Answers-</p>
                {data.answers.map((answer: string, index: number) => (
                    <div key={index}>
                        <p>{answer}</p>
                    </div>
                ))}
                <br />
                <p>Points-</p>
                {data.points.map((point: any, index: any) => (
                    <div key={index}>
                        <p>{point}</p>
                    </div>
                ))}
                <br />
                <p>Her Age- {data.her_age}</p>
                <p>His Age- {data.his_age}</p>
                <br />
            </div>
            </div>
        ))}
    </div>
  )
}
