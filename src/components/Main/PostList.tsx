import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: string
    }
  }
}

type PostListProps = {
  posts: PostType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvelog.io%2F%40tjdud0123%2Fsample-coding-javascript-%25EC%2595%25B1-%25EB%25B2%2584%25EC%25A0%2584-%25EB%25B6%2584%25EA%25B8%25B0&psig=AOvVaw1e1l_lG4S627Mt7C4hRo7h&ust=1679396414560000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJi7wqet6v0CFQAAAAAdAAAAABAE',
  link: '<https://www.google.co.kr/>',
}

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
