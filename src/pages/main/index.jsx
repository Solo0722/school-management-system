import { Button, Layout } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import { Route, Routes, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import Sidebar from "../../shared/components/Sidebar";
import colors from "../../shared/utils/colors";
import Transitions from "../../shared/utils/Transitions";
import Dashboard from "./dashboard";
import Profile from "./profile";
import Registration from "./registration";
import Staff from "./staff";
import StudentDetail from "./studentDetail";
import Students from "./students";

const { Header, Sider, Content } = Layout;

const Main = () => {
  const { loginDetails } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!loginDetails.username || !loginDetails.password) {
      navigate("/login");
    }
  }, []);

  return (
    <Transitions>
      <Layout
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          border: "1px solid yellow",
        }}
      >
        <Sider
          // theme="light"
          collapsedWidth={"70px"}
          width={"200px"}
          style={{
            backgroundColor: `${colors.accent}`,
            overflow: "auto",
            minHeight: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            transition: "all ease",
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          trigger={
            <div
              style={{
                height: "100%",
                width: "100%",
                background: `${colors.accent}`,
                padding: "0 10px",
              }}
            >
              <Button
                block
                style={{ width: "100%", color: `${colors.white}` }}
                type="text"
                icon={
                  collapsed ? <HiChevronDoubleRight /> : <HiChevronDoubleLeft />
                }
              />
            </div>
          }
        >
          <Sidebar collapsed={collapsed} />
        </Sider>
        <Content
          style={{
            backgroundColor: `${colors.white}`,
            width: `${collapsed ? "calc(100% - 70px)" : "calc(100% - 200px)"}`,
            minHeight: "100vh",
            // position: "fixed",
            left: `${collapsed ? "70px" : "200px"}`,
            position: "fixed",
            top: 0,
            bottom: 0,
            overflow: "auto",
          }}
        >
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/students" element={<Students />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/registration/:userType" element={<Registration />} />
            <Route path="/student/:id" element={<StudentDetail />} />
          </Routes>
        </Content>
      </Layout>
    </Transitions>
  );
};

export default Main;
