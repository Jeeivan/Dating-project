import { AllPickers } from "../../components/JobPicker/Picker";
import { Selections } from "../../components/Occupation/Selections";

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
        <Selections question="What is his height?" questionNum="3" selections={heightSelections}/>
    </div>
)
}

