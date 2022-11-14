import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainWrapper, RoutesWrapper } from "../students";
import Home from "./home";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import Transitions from "../../shared/utils/Transitions";
import Profile from "./profile";
import Navbar from "../../shared/components/Navbar";
import Sidebar from "../../shared/components/Sidebar";

const staffLinks = [
  {
    name: "Home",
    icon: <HiOutlineHome size={20} />,
    link: "/staff-portal",
  },
  {
    name: "Profile",
    icon: <HiOutlineUser size={20} />,
    link: "/staff-portal/profile",
  },
  {
    name: "My Classes",
    icon: <HiOutlineUserGroup size={20} />,
    link: "/staff-portal/my-classes",
  },
];

const StaffRoutes = () => {
  return (
    <Transitions>
      <MainWrapper>
        <Sidebar type={"Staff"} data={staffLinks} />
        <RoutesWrapper>
          <Navbar type={"Staff"} data={staffLinks} />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </RoutesWrapper>
      </MainWrapper>
    </Transitions>
  );
};

export default StaffRoutes;
