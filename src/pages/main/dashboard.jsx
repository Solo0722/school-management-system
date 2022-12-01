import { Avatar, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import DemoArea from "../../shared/components/Graph";
import DemoLine from "../../shared/components/Graph2";
import StudentsBoard from "../../shared/components/StudentsBoard";
import Transitions from "../../shared/utils/Transitions";

const Dashboard = () => {
  return (
    <Transitions>
      <DashboardWrapper>
        <HeadingWrapper>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Welcome back, Admin 👋</h4>
            {/* <h5 style={{ color: "rgba(0,0,0,0.3)" }}>
              Welcome back, nice to see you again.
            </h5> */}
          </div>
          <Avatar
            src="https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/03/16180658/justin-hartley-700x380-1.jpg"
            size="small"
          />
        </HeadingWrapper>
        <BodyWrapper>
          <Row
            gutter={16}
            style={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <Col className="gutter-row" span={8}>
              <StudentsBoard />
            </Col>
            <Col className="gutter-row" span={8}>
              <StudentsBoard />
            </Col>
            <Col className="gutter-row" span={8}>
              <StudentsBoard />
            </Col>
          </Row>
          <Row
            gutter={16}
            style={{
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <Col className="gutter-row" span={14}>
              <DemoArea />
            </Col>
            <Col className="gutter-row" span={10}>
              <DemoLine />
            </Col>
          </Row>
        </BodyWrapper>
      </DashboardWrapper>
    </Transitions>
  );
};

const DashboardWrapper = styled.div`
  width: 100%;
  /* padding: 1rem; */
`;

export const HeadingWrapper = styled.div`
  width: 100%;
  height: 40px;
  padding: 1rem;
  box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.05);
  background: #fff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 99;
`;

const BodyWrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;
`;

export default Dashboard;
