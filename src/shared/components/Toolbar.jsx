import { Avatar } from "antd";
import React from "react";
import styled from "styled-components";

const Toolbar = ({ title, options }) => {
  return (
    <ToolbarWrapper>
      <h4>{title}</h4>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {options.map((item) => item)}
      </div>
    </ToolbarWrapper>
  );
};

const ToolbarWrapper = styled.div`
  width: 100%;
  height: 40px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: #fff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export default Toolbar;
