import { Button, Drawer } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { menu } from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Drawerbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Wrapper>
      <Button
        type="text"
        onClick={visible ? onClose : showDrawer}
        icon={<BiMenu size={20} style={{ color: "#fff" }} />}
      />

      <Drawer
        placement="right"
        headerStyle={{ display: "none" }}
        footerStyle={{ display: "none" }}
        // bodyStyle={{ padding: "0", margin: "0px" }}
        width="65%"
        onClose={onClose}
        visible={visible}
        style={{ marginTop: "50px" }}
      >
        {menu.map((item) => (
          <Button
            block
            icon={item.icon}
            onClick={() => navigate(item.link)}
            type={`${location.pathname === item.link ? "primary" : "text"}`}
            className="butt"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              margin: "15px 0",
            }}
          >
            <span style={{ marginLeft: 10 }}>{item.name}</span>
          </Button>
        ))}
      </Drawer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    & {
      display: inline-block;
    }
  }
`;

export default Drawerbar;
