import React from "react";
import styled from "styled-components";
import colors from "../../shared/theme/colors";
import Transitions from "../../shared/utils/Transitions";



const Home = () => {
  return (
    <Transitions>
      <HomeWrapper>
        <HeaderWrapper>
          <h2>
            <strong>Welcome back, Solomon :)</strong>
          </h2>
        </HeaderWrapper>
        <BodyWrapper></BodyWrapper>
      </HomeWrapper>
    </Transitions>
  );
};

const HomeWrapper = styled.div`
  padding: 1rem;
`;

const HeaderWrapper = styled.div`
  h2 {
    color: ${colors.secondary};
  }
`;

const BodyWrapper = styled.div`
  margin-top: 30px;
`;


export default Home;
