import React from 'react'
import styled from '@emotion/styled'
import GlobStyle from 'components/Common/GlobalStyle'
import About from 'components/Main/About'
import Footer from 'components/Common/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const IndexPage = () => {
  return (
    <Container>
      <GlobStyle />
      <About />
      <Footer />
    </Container>
  )
}

export default IndexPage
