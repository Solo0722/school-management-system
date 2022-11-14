import React from 'react'
import styled from 'styled-components'
import Transitions from '../../shared/utils/Transitions';

const Profile = () => {
  return (
    <Transitions>
      <ProfileWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error
          omnis dolorem nesciunt a ullam sunt, nostrum, itaque ad eveniet
          maiores laboriosam aspernatur possimus similique qui sit! Aspernatur,
          alias sunt!
        </p>
      </ProfileWrapper>
    </Transitions>
  );
}

const ProfileWrapper = styled.div`
  padding: 1rem;
`;

export default Profile