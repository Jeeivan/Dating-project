import { Page } from '../../components/Line/Page'

export default function Comment() {
  return (
    <Page question='Has he commented on anything specific in your profile?' answers={['Yes', 'No']} point={[4, 1]} nextPage='live' />
  )
}
