import React from 'react'
import { Page } from '../../components/Line/Page'

export default function Lines() {
  return (
    <Page question='How many lines was his first message?' answers={['1-2', '3-4', '5+', 'An essay']} point={[1, 4, 3, 2]} nextPage="comment"/>
  )
}
