import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export interface FormData {
    name: string;
    her_age: number;
    his_age: number;
    answers: string[];
    points: number[];
    green_flag: boolean;
    _id: string;
}

export default function AllData() {
    const [allData, setAlldata] = useState<FormData[]>([])

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
          {allData ? (
            allData.map((data: FormData, index: number) => (
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
                  {data.points.map((point: number, index: number) => (
                    <div key={index}>
                      <p>{point}</p>
                    </div>
                  ))}
                  <br />
                  <br />
                </div>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      );
      
}
