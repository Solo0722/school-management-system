import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../../context/context";
import Navbar from "../../shared/components/Navbar";
import colors from "../../shared/utils/colors";
import Transitions from "../../shared/utils/Transitions";
import Dashboard from "./dashboard";
import Registration from "./registration";
import Staff from "./staff";
import Students from "./students";
import UserDetails from "./userDetails";

const Main = () => {
  const { loginDetails } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginDetails.username || !loginDetails.password) {
      navigate("/login");
    }
  }, []);

  return (
    <Transitions>
      <Navbar />
      <RoutesWrapper>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/registration/:userType" element={<Registration />} />
          <Route path="/:userType/:id" element={<UserDetails />} />
        </Routes>
      </RoutesWrapper>
    </Transitions>
  );
};

const RoutesWrapper = styled.div`
  background: ${colors.white};
  min-height: calc(100vh - 50px);
  overflow-x: hidden;
  position: relative;
`;

export default Main;
