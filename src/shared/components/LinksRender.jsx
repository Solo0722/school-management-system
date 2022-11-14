import React, { useContext } from "react";
import styled from "styled-components";
import { Avatar, Button} from "antd";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import { Divider } from "antd";
import colors from "../theme/colors";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/context";

const LinksRender = ({ type, data, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showSignOutComfirmModal } = useContext(GlobalContext);

  const handleSignOut = () => {
    onClose && onClose();
    showSignOutComfirmModal();
  };

  return (
    <Wrapper>
      <Titlebar>
        <Avatar
          icon={<img src="/images/logo-512.png" alt="logo" />}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "teal",
          }}
        />
        <h3>{type} Portal</h3>
      </Titlebar>
      <Divider style={{ background: "rgba(255,255,255,0.1)", margin: 0 }} />
      <div>
        {data.map((item) => (
          <Link to={item.link} onClick={onClose && onClose}>
            <LinkWrapper>
              <Button
                icon={item.icon}
                block
                type="text"
                onClick={() => navigate(item.link)}
                style={{
                  backgroundColor: `${
                    location.pathname === item.link ? "rgba(0,0,0,0.3)" : ""
                  }`,
                }}
              >
                <span> {item.name}</span>
              </Button>
            </LinkWrapper>
          </Link>
        ))}
      </div>
      <Divider style={{ background: "rgba(255,255,255,0.1)", margin: 0 }} />
      <LinkWrapper>
        <Button
          icon={<HiOutlineLogout size={20} />}
          block
          type="text"
          onClick={handleSignOut}
        >
          <span>Sign out</span>
        </Button>
      </LinkWrapper>
      <Divider style={{ background: "rgba(255,255,255,0.1)", margin: 0 }} />
      <AvatarWrapper>
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
        <span>Owusu-Ansah Solomon</span>
      </AvatarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  span {
    margin-left: 10px;
  }

  @media screen and (max-width: 600px) {
    button {
      color: ${colors.black};
    }
  }
`;

const Titlebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 25px;

  h3 {
    margin: 0;
    margin-left: 10px;
    color: #fff;
    text-transform: capitalize;
  }

  img {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 600px) {
    h3 {
      color: ${colors.black};
    }
  }
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 25px 0;
`;

const AvatarWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
  backdrop-filter: blur(100px);
  z-index: 10;
`;

export default LinksRender;
