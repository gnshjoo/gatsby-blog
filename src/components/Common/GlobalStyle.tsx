import { css, Global } from '@emotion/react'
import { FunctionComponent } from 'react'

const defaultStyle = css`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobStyle: FunctionComponent = () => {
  return <Global styles={defaultStyle} />
}

export default GlobStyle
