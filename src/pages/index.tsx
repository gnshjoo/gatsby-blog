import React from 'react'
import styled from '@emotion/styled'
import GlobStyle from 'components/Common/GlobalStyle'
import About from 'components/Main/About'
import Footer from 'components/Common/Footer'
import CategoryList from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const CATEGORY_LIST = {
  ALL: 5,
  WEB: 3,
  MOBILE: 2,
}

const IndexPage = () => {
  return (
    <Container>
      <GlobStyle />
      <About />
      <CategoryList selectedCategory="WEB" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  )
}

export default IndexPage
