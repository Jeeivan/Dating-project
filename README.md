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

## Key Learnings/Takeaways

## Future Improvements