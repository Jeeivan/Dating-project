import { Page } from "../../components/Line/Page";


export default function Felon() {
    return (
        <Page question='Is he a felon?' answers={["Yes", "No", "I don't know"]} point={[-4, 0, 0]} nextPage='height' />
      )
}
