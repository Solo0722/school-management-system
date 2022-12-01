import React from 'react'
import styled from 'styled-components'

const StudentsBoard = () => {
  return (
    <BoardWrapper>
    </BoardWrapper>
  );
}

const BoardWrapper = styled.div`
  /* width: 100%; */
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export default StudentsBoard