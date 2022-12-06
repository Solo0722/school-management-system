import { List } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/context";
import moment from "moment";

const LogBoard = () => {
  const { loginDates } = useContext(GlobalContext);
  return (
    <BoardWrapper>
      <h3>Log Details</h3>
      <div className="cont">
        <ul>
          {loginDates.map((date) => (
            <li>{moment(date).format("dddd, Do MMMM YYYY h:mm:s a")}</li>
          ))}
        </ul>
      </div>
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .cont {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  li {
    margin: 10px 0;
  }
`;

export default LogBoard;
