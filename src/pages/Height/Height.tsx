import { Page } from "../../components/Line/Page";


export default function Height() {
  return (
    <Page 
    question='Please select his height' 
    answers={[
        "<5’",
        "5’1",
        "5’2",
        "5’3",
        "5’4",
        "5’5",
        "5’6",
        "5’7",
        "5’8",
        "5’9",
        "5’10",
        "5’11",
        "6’0",
        "6’1",
        "6’2",
        "6’3",
        "6’4",
        "6’5",
        "6’6",
        "6’7",
        ">6’7"
      ]}  
      
      point={[
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
        3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1
      ]}
      
        nextPage="1"/>
  )
}
