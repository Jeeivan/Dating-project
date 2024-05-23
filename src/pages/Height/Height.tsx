import { AllPickers } from "../../components/JobPicker/Picker";

const heightSelections = [
    { title: "<5’", points: 4 },
    { title: "5’1", points: 4 },
    { title: "5’2", points: 4 },
    { title: "5’3", points: 4 },
    { title: "5’4", points: 4 },
    { title: "5’5", points: 4 },
    { title: "5’6", points: 4 },
    { title: "5’7", points: 4 },
    { title: "5’8", points: 4 },
    { title: "5’9", points: 4 },
    { title: "5’10", points: 3 },
    { title: "5’11", points: 3 },
    { title: "6’0", points: 1 },
    { title: "6’1", points: 1 },
    { title: "6’2", points: 1 },
    { title: "6’3", points: 1 },
    { title: "6’4", points: 1 },
    { title: "6’5", points: 1 },
    { title: "6’6", points: 1 },
    { title: "6’7", points: 1 },
    { title: ">6’7", points: 1 }
];



export default function Height() {
  return (
    <div>
        <h3>What is his height?</h3>
        <AllPickers questionNum="3" selections={heightSelections} />
    </div>
)
}

// <Page 
// question='Please select his height' 
// answers={[
//     "<5’",
//     "5’1",
//     "5’2",
//     "5’3",
//     "5’4",
//     "5’5",
//     "5’6",
//     "5’7",
//     "5’8",
//     "5’9",
//     "5’10",
//     "5’11",
//     "6’0",
//     "6’1",
//     "6’2",
//     "6’3",
//     "6’4",
//     "6’5",
//     "6’6",
//     "6’7",
//     ">6’7"
//   ]}  
  
//   point={[
//     4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
//     3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1
//   ]}
  
//     nextPage="1"/>