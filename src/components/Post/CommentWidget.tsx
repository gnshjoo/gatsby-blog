import styled from '@emotion/styled'
import { createRef } from 'react'

const src = 'https://utteranc.es/client.js'
const repo = 'https://github.com/gnshjoo/blog-comments'

type UtterancesAttributesType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const UtterancesWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const CommentWidget = () => {
  const element = createRef<HTMLDivElement>()

  const utterances: HTMLScriptElement = document.createElement('script')

  const attribute: UtterancesAttributesType = {
    src,
    repo,
    'issue-term': 'pathname',
    label: 'Comment',
    theme: 'github-light',
    crossorigin: 'anonymous',
    async: 'true',
  }

  Object.entries(attribute).forEach(([key, value]) => {
    utterances.setAttribute(key, value)
    element.current?.appendChild(utterances)
  }, [])
  return <UtterancesWrapper ref={element} />
}

export default CommentWidget
