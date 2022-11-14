import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import LinksRender from "./LinksRender";

const Sidebar = ({ type, data }) => {
  return (
    <SidebarWrapper>
      <LinksRender type={type} data={data} />
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: 240px;
  height: 100vh;
  background: ${colors.accent};
  color: ${colors.ghostwhite};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.65px;
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 10px;
  z-index: 100;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    /* display: none; */
    z-index: -10;
  }

  @media screen and (max-width: 600px) {
    & {
      display: none;
    }
  }
`;

export default Sidebar;
