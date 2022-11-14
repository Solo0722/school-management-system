import React from "react";
import styled from "styled-components";
import Transitions from "../../shared/utils/Transitions";

const Results = () => {
  return (
    <Transitions>
      <ResultsWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error
          omnis dolorem nesciunt a ullam sunt, nostrum, itaque ad eveniet
          maiores laboriosam aspernatur possimus similique qui sit! Aspernatur,
          alias sunt!
        </p>
      </ResultsWrapper>
    </Transitions>
  );
};

const ResultsWrapper = styled.div`
  padding: 1rem;
`;

export default Results;
