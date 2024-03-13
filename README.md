## Dating Organiser ReadMe

![App Screenshot](example.png)

## Project Description

This application enables users to input information about their dating matches into a questionnaire. The questionnaire calculates a compatibility rating, making it easier for users to choose partners, particularly for those who encounter numerous matches on dating sites. The app employs a weighted scoring system for each question to determine which partners are the best match.

## Table of Contents

- [Deployment Link](#deployment-link)
- [Technologies Used](#technologies-used)
- [Build Process](#build-process)
- [Challenges](#challenges)
- [Wins](#wins)
- [Key Learnings/Takeaways](#key-learningstakeaways)
- [Future Improvements](#future-improvements)

## Deployment Link

In the process of adding new features before deploying application

## Technologies Used

TypeScript JavaScript MongoDB Mongoose Node.js Express React

## Build Process

## Challenges

Initially, I used a local storage approach to store the answers and points for each question. However, this approach would not have been feasible for future development when there are more questions and answers per question.

After successfully connecting my frontend to the database, I encountered difficulty in figuring out how to gather all the answers in one place. This led me to first attempt to take advantage of props in React and pass them through each page. However, I encountered a lot of difficulty with this approach.

Upon further consideration, I realised that I could simply send a POST request for the first answer of the questionnaire. For any subsequent answers, I could then update the previous answer with the new answers and points.

This realization prompted me to adjust my schema to change the structure of my answers and points into an array, allowing me to push multiple answers and points into it:

```

const formSchema = new mongoose.Schema({
    name: {
        type: String
    },
    her_age: {
        type: Number
    },
    his_age: {
        type: Number
    },
    answers: {
        type: [String]
    },
    points: {
        type: [Number]
    }
})

export const Form = mongoose.model('Form', formSchema)

```

## Wins

I am pleased with my ability to quickly handle bugs, such as one I encountered on the first page of the questionnaire:

```

        <Link to={formId ? `/1/${formId}` : "#"}>
            <button onClick={createForm}>Press here to start</button>
        </Link>

```

The issue arose when the button was clicked, attempting to send a POST request while simultaneously navigating to the next page. Initially, the formId would be null on the initial click, requiring the user to press the button twice to proceed to the next part of the questionnaire, resulting in the creation of two forms. To resolve this, I implemented a solution by creating a separate button to navigate to the next page after the form was submitted.

```

export default function Home() {
    const [name, setName] = useState('')
    const [formId, setFormId] = useState(null)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
}

useEffect(() => {
    console.log("Form ID:", formId);
    
}, [formId])

async function createForm() {
    try {
        const response = await fetch(`http://localhost:3006/form/submit/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name
            }),
        })

        if (response.ok) {
            const data = await response.json()
            setFormId(data._id)
            console.log("Form created successfully");
            setIsDisabled(false)
            setIsSubmitDisabled(true)
        } else {
            console.error("Error creating form")
        }
    } catch (error) {
        console.error("Error creating form", error)
    }
}


  return (
    <div>
        <div>Questionnaire</div>
        <h3>What is your name?</h3>
        <input type="text" value={name} onChange={handleInputChange} disabled={isSubmitDisabled}/>
            <button onClick={createForm} disabled={isSubmitDisabled}>Submit</button>
            <br />
            <br />
        <Link to={formId ? `/1/${formId}` : "#"}>
            <button disabled={isDisabled}>Press here to start the questionnaire</button>
        </Link>
    </div>
  )
}

```

I am also pleased with my utilization of states to disable both the input field and the submit button once the user has submitted their name, ensuring that it cannot be changed and that the user cannot submit more than one form on the first page.


## Key Learnings/Takeaways

This project was my first time using TypeScript for a full-stack project, and it provided several advantages. TypeScript's static typing helped catch errors during development, leading to fewer bugs and smoother deployments.

## Future Improvements

An area for improvement in this project is the absence of comprehensive documentation during the planning phase. Without detailed planning documents, challenges arose during development, particularly in deciding the most effective approach for handling answers and points.

By doing so would likely result in a more efficient development process, fewer unforeseen challenges, and a more cohesive end product.