import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { FunctionComponent } from 'react'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = ({
  profileImage,
}) => {
  return <ProfileWrapper image={profileImage} alt="Profile IMG" />
}

export default ProfileImage
