import { Page } from '../../components/Line/Page'

export default function Live() {
  return (
    <Page question='Where does he live?' answers={["Nearby (easy to get to)", "Far (but manageable)", "Really far (unreasonably far away)", "Overseas"]} point={[4, 3, 1, 1]} nextPage='complete' />
  )
}
