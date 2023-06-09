import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = () => {
  return <FooterWrapper>@COPYRIGHT SHJOO</FooterWrapper>
}

export default Footer
