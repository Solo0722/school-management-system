import { Button, Menu, Tooltip } from "antd";
import {
  HiSquares2X2,
  HiUserGroup,
  HiUsers,
  HiCog,
  HiUser,
  HiBanknotes,
  HiCalendarDays,
  HiCog8Tooth,
} from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/colors";

const menu = [
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
  {
    name: "Financies",
    icon: <HiBanknotes />,
    link: "/financies",
  },
  {
    name: "Events",
    icon: <HiCalendarDays />,
    link: "/events",
  },
  {
    name: "Settings",
    icon: <HiCog8Tooth />,
    link: "/settings",
  },
];

const Sidebar = ({ collapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarWrapper>
      <TitleBar>
        {collapsed ? (
          <Button
            block
            icon={<img src="/images/logo-512.png" alt="logo" />}
            type="text"
            className="logo"
          />
        ) : (
          <h3>
            <span>Skyline</span>
            &nbsp;
            <span style={{ color: `${colors.white}` }}>College</span>
          </h3>
        )}
      </TitleBar>
      <LinksWrapper>
        {collapsed
          ? menu.map((item, i) => (
              <Tooltip
                title={item.name}
                // color="#fff"
                placement="right"
                showArrow={false}
                style={{ color: "#181820" }}
                key={i}
              >
                <Button
                  icon={item.icon}
                  block
                  type="text"
                  // className="miniBtn"
                  className={`miniBtn ${
                    item.link === location.pathname ? "active" : ""
                  }`}
                  onClick={() => navigate(item.link)}
                />
              </Tooltip>
            ))
          : menu.map((item) => (
              <Button
                icon={item.icon}
                block
                type="text"
                // className="linkBtn"
                className={`linkBtn ${
                  item.link === location.pathname ? "active" : ""
                }`}
                onClick={() => navigate(item.link)}
              >
                <span>{item.name}</span>
              </Button>
            ))}
      </LinksWrapper>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${colors.accent};
  color: ${colors.white};
  padding: 1rem 0;
`;

const TitleBar = styled.div`
  height: 32px;
  width: 100%;
  margin-bottom: 20px;
  /* padding: 0 1.5rem; */
  padding: 0 10px;

  img {
    width: 30px;
    height: 30px;
  }

  h3 {
    margin-left: 15px;
    color: ${colors.primary};
  }

  .logo {
    width: 100%;
    color: ${colors.white};
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`;

const LinksWrapper = styled.div`
  width: 100%;
  padding: 0 10px;

  button:hover {
    color: ${colors.primary} !important;
    opacity: 0.5;
  }

  .linkBtn {
    width: 100%;
    margin: 15px 0;
    color: ${colors.white};
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    span {
      margin-left: 15px;
    }
  }

  .miniBtn {
    width: 100%;
    margin: 15px 0;
    color: ${colors.white};
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }

  .active {
    /* background: #ffffff10;
    color: ${colors.white};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px); */
    background: ${colors.primary};
  }
`;
export default Sidebar;
