import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import ProfileImage from './Profile'

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;
`
const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 18px;
`
const About: FunctionComponent = () => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />
        <div>
          <SubTitle>Hello</SubTitle>
          <Title>Nice to Meet you ?</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default About
