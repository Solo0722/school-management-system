import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";

const Board = ({ board }) => {
  return (
    <BoardWrapper>
      <div>
        <h1>{board.value}</h1>
        <p>{board.title}</p>
      </div>
      <div>
        <img src={board.image} alt="board-img" />
      </div>
    </BoardWrapper>
  );
};

export const BoardWrapper = styled.div`
  width: 30%;
  height: 150px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: ${colors.primary};
  }

  img {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

export default Board;
