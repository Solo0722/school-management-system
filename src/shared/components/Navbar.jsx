import { Avatar, Dropdown, Menu, Space } from "antd";
import React, { useContext } from "react";
import {
  HiOutlineBell,
  HiOutlineChevronDown,
  HiOutlineUser,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import { HiOutlineLogout, HiOutlineUserCircle } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Drawerbar from "./Drawerbar";
import colors from "../theme/colors";
import { GlobalContext } from "../../context/context";

const Navbar = ({ type, data }) => {
  const location = useLocation();
  const { showSignOutComfirmModal } = useContext(GlobalContext);

  const dropdownMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: "Owusu-Ansah Solomon",
          icon: <HiOutlineUserCircle />,
        },
        {
          key: "2",
          label: "Dark Theme",
          icon: <HiOutlineLightBulb />,
        },
        {
          key: "3",
          label: "Sign out",
          icon: <HiOutlineLogout />,
          onClick() {
            showSignOutComfirmModal();
          },
        },
      ]}
    />
  );

  return (
    <NavbarWrapper>
      <Space>
        <Drawerbar type={type} data={data} />
        <h4>Home</h4>
      </Space>
      <AvatarWrapper>
        <Avatar
          icon={<HiOutlineBell />}
          size="small"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "teal",
            marginRight: "10px",
          }}
        />
        <Dropdown overlay={dropdownMenu} arrow={false} trigger={"click"}>
          <Space style={{ cursor: "pointer" }}>
            <Avatar
              icon={<HiOutlineUser />}
              size="small"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "teal",
              }}
            />
            <span>
              <HiOutlineChevronDown style={{ marginTop: "3px" }} size={10} />
            </span>
          </Space>
        </Dropdown>
      </AvatarWrapper>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  height: 50px;
  width: 100%;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(60px);

  h4 {
    margin-top: 5px;
  }

  @media screen and (max-width: 600px) {
    & {
      background-color: ${colors.accent};
      color: ${colors.ghostwhite};
    }

    h4 {
      color: ${colors.ghostwhite};
    }
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default Navbar;
