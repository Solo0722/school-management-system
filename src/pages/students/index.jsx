import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./home";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineChartBarSquare,
  HiOutlineCreditCard,
} from "react-icons/hi2";
import Navbar from "../../shared/components/Navbar";
import Transitions from "../../shared/utils/Transitions";
import Profile from "./profile";
import Results from "./results";
import Sidebar from "../../shared/components/Sidebar";

const studentsLinks = [
  {
    name: "Home",
    icon: <HiOutlineHome size={20} />,
    link: "/student-portal",
  },
  {
    name: "Profile",
    icon: <HiOutlineUser size={20} />,
    link: "/student-portal/profile",
  },
  {
    name: "Results",
    icon: <HiOutlineChartBarSquare size={20} />,
    link: "/student-portal/results",
  },
  {
    name: "Fees",
    icon: <HiOutlineCreditCard size={20} />,
    link: "/student-portal/fees",
  },
];

const StudentRoutes = () => {
  return (
    <Transitions>
      <MainWrapper>
        <Sidebar type={"Student"} data={studentsLinks} />
        <RoutesWrapper>
          <Navbar type={"Student"} data={studentsLinks} />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </RoutesWrapper>
      </MainWrapper>
    </Transitions>
  );
};

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const RoutesWrapper = styled.div`
  width: calc(100% - 240px);
  min-height: 100vh;
  float: right;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 240px;

  @media screen and (max-width: 600px) {
    & {
      width: 100%;
      left: 0px;
    }
  }
`;

export default StudentRoutes;
