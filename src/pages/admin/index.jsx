import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainWrapper, RoutesWrapper } from "../students";
import Home from "./home";
import {
  HiOutlineHome,
  HiOutlineCreditCard,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineCircleStack,
} from "react-icons/hi2";
import Transitions from "../../shared/utils/Transitions";
import Profile from "./profile";
import Navbar from "../../shared/components/Navbar";
import Sidebar from "../../shared/components/Sidebar";
import StudentsCollection from "./studentsCollection";
import StaffCollection from "./staffCollection";

const adminLinks = [
  {
    name: "Home",
    icon: <HiOutlineHome size={20} />,
    link: "/admin-portal",
  },
  {
    name: "Profile",
    icon: <HiOutlineUser size={20} />,
    link: "/admin-portal/profile",
  },
  {
    name: "Students",
    icon: <HiOutlineUserGroup size={20} />,
    link: "/admin-portal/all-students",
  },
  {
    name: "Staff",
    icon: <HiOutlineUsers size={20} />,
    link: "/admin-portal/all-teachers",
  },
  {
    name: "Financies",
    icon: <HiOutlineCreditCard size={20} />,
    link: "/admin-portal/financies",
  },
  {
    name: "Audit logs",
    icon: <HiOutlineCircleStack size={20} />,
    link: "/admin-portal/audit-logs",
  },
];

const AdminRoutes = () => {
  return (
    <Transitions>
      <MainWrapper>
        <Sidebar type={"Admin"} data={adminLinks} />
        <RoutesWrapper>
          <Navbar type={"Admin"} data={adminLinks} />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/all-students" element={<StudentsCollection />} />
            <Route path="/all-teachers" element={<StaffCollection />} />
          </Routes>
        </RoutesWrapper>
      </MainWrapper>
    </Transitions>
  );
};

export default AdminRoutes;
