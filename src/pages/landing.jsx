import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import colors from "../shared/theme/colors";
import { useNavigate } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import Transitions from "../shared/utils/Transitions";

const Landing = () => {
  const navigate = useNavigate();

  const portalsData = [
    {
      name: "Student",
      description: "Enter this section to access the students' portal.",
      image: "/images/graduated.png",
      link: "/auth/student",
    },
    {
      name: "Staff",
      description: "This section is exclusively for TFEC staff members.",
      image: "/images/team.png",
      link: "/auth/staff",
    },
    {
      name: "Admin",
      description: "This section is exclusively for TFEC admins.",
      image: "/images/admin.png",
      link: "/auth/admin",
    },
  ];

  return (
    <Transitions>
      <LandingWrapper>
        <Titlebar>
          <img src="/images/logo-512.png" alt="school-badge" />
          <h2>
            <strong>The Flash Educational Complex</strong>
          </h2>
        </Titlebar>
        <PortalsWrapper>
          {portalsData.map((section, i) => (
            <SectionWrapper key={i}>
              <ImageWrapper>
                <img src={section.image} alt={`${section.name}-pic`} />
              </ImageWrapper>
              <ContentWrapper>
                <h3>{section.name}</h3>
                <p>{section.description}</p>
                <Button
                  block
                  type="primary"
                  onClick={() => navigate(section.link)}
                >
                  Go{" "}
                  <HiOutlineChevronDoubleRight
                    style={{ marginTop: "2px", marginLeft: "5px" }}
                  />
                </Button>
              </ContentWrapper>
            </SectionWrapper>
          ))}
        </PortalsWrapper>
      </LandingWrapper>
    </Transitions>
  );
};

const LandingWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 20px;
`;

const Titlebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1,
  h2 {
    text-align: center;
  }

  img {
    width: 70px;
    height: 70px;
  }
`;

const PortalsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const SectionWrapper = styled.div`
  width: 280px;
  height: 320px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid ${colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }
`;
const ContentWrapper = styled.div`
  margin-top: 15px;
  h3,
  p {
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Landing;
