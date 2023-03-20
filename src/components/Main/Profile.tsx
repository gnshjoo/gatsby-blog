import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const Profile_IMG =
  'https://avatars.githubusercontent.com/u/23391657?s=400&u=8413451c5d94079f05b9b4e6420f496b474e3ac3&v=4'

const ProfileWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = () => {
  return <ProfileWrapper src={Profile_IMG} alt="Profile IMG" />
}

export default ProfileImage
