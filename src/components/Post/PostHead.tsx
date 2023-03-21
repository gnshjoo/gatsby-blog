import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadinfo from './PostHeadInfo'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = {
  thumbnail: IGatsbyImageData
  title: string
  date: string
  categories: string[]
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`

const BackgoundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
`

const PostHead = ({ title, thumbnail, date, categories }: PostHeadProps) => {
  return (
    <PostHeadWrapper>
      <BackgoundImage image={thumbnail} alt="thumbnail" />
      <PostHeadinfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  )
}

export default PostHead
