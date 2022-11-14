import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import styled from "styled-components";
import colors from "../theme/colors";
import LinksRender from "./LinksRender";

const Drawerbar = ({ type, data }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <DrawerWrapper>
      <Button
        className="menu-btn"
        type="text"
        onClick={showDrawer}
        icon={<HiOutlineMenu />}
      />
      <Drawer
        title="Mobile Drawer"
        width="240px"
        placement="left"
        onClose={onClose}
        open={open}
        footerStyle={{ display: "none" }}
        headerStyle={{ display: "none" }}
        bodyStyle={{
          position: "relative",
          overflowX: "hidden",
          padding: "10px",
          margin: 0,
          color: `${colors.black}`,
        }}
      >
        <LinksRender type={type} data={data} onClose={onClose} />
      </Drawer>
    </DrawerWrapper>
  );
};

const DrawerWrapper = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    & {
      display: inline-block;
    }

    .menu-btn {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: ${colors.ghostwhite};
    }
  }
`;

export default Drawerbar;
