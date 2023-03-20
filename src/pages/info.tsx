import React from 'react'
import { graphql } from 'gatsby'
import { Global, css } from '@emotion/react'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: InfoPageProps) => {
  return (
    <div>
      <Global
        styles={css`
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 20px;
        `}
      />
      {title} {description} {author}
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
