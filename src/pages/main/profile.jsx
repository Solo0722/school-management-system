import React from "react";
import styled from "styled-components";
import Transitions from "../../shared/utils/Transitions";

const Profile = () => {
  return (
    <Transitions>
      <ProfileWrapper>Profile</ProfileWrapper>
    </Transitions>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export default Profile;
