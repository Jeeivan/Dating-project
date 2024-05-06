import { Page } from '../../components/Line/Page'

export default function Comment() {
  return (
    <Page question='Has he commented on anything specific in your profile?' answers={['Yes', 'No']} point={[10, 20]} nextPage='live' />
  )
}
