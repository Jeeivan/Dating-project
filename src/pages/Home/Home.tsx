import { Link } from "react-router-dom";

export default function Home() {

// async function fetchFormData() {
//     try {
//         const response = await fetch(`http://localhost:3006/form/display/`)
//         const data = await response.json()

//         if (response.ok) {
//             setResults(data)
//             console.log(data);
//         } else {
//             console.log('Failed to fetcg form data');
//         }
//     } catch (error) {
//         console.error("Error fetching form data", error)
//     }
// }

  return (
    <div>
        <div>Questionnaire</div>
        <Link to="/1">
            <button>Press here to start</button>
        </Link>
    </div>
  )
}
