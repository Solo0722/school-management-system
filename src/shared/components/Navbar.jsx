import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import {
  HiSquares2X2,
  HiUserGroup,
  HiUsers,
  HiBanknotes,
  HiCalendarDays,
} from "react-icons/hi2";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Drawerbar from "./Drawerbar";

export const menu = [
  {
    name: "Dashboard",
    icon: <HiSquares2X2 />,
    link: "/",
  },
  {
    name: "Students",
    icon: <HiUserGroup />,
    link: "/students",
  },
  {
    name: "Staff",
    icon: <HiUsers />,
    link: "/staff",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavbarWrapper>
      <img src="/images/logo-512.png" alt="logo" width={30} height={30} />
      <ul>
        {menu.map((item) => (
          <li
            key={item.link}
            onClick={() => navigate(item.link)}
            className={`${location.pathname === item.link ? "active" : ""}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="drawer">
        <Drawerbar />
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 46px;
  background: #fff;
  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 0 1rem;
  z-index: 99;

  ul {
    list-style-type: none;
    height: 46px;
  }

  li {
    display: inline-block;
    height: 100%;
    margin-left: 2rem;
    padding: 7px;
    cursor: pointer;
  }

  .active {
    border-bottom: 1.5px solid ${colors.primary};
  }

  .drawer {
    display: none;
  }

  @media screen and (max-width: 486px) {
    & .drawer {
      display: inline-block;
    }

    ul {
      display: none;
    }
  }
`;

export default Navbar;
