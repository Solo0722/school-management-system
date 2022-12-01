import React from "react";
import styled from "styled-components";
import Transitions from "../../shared/utils/Transitions";

const Staff = () => {
  return (
    <Transitions>
      <StaffWrapper>Staff</StaffWrapper>
    </Transitions>
  );
};

const StaffWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export default Staff;
