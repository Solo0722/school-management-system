import { Avatar } from "antd";
import React from "react";
import styled from "styled-components";
import Board from "../../shared/components/Board";
import LogBoard from "../../shared/components/LogBoard";
import Toolbar from "../../shared/components/Toolbar";
import Transitions from "../../shared/utils/Transitions";

const boards = [
  { title: "No. of students", value: 230, image: "/images/team2.png" },
  { title: "No. of teachers", value: 35, image: "/images/group.png" },
  {
    title: "School Treasury",
    value: "$1340.00",
    image: "/images/credit-card.png",
  },
];

const Dashboard = () => {
  return (
    <Transitions>
      <DashboardWrapper>
        <Toolbar
          title="Welcome back, Admin 👋"
          options={[
            <Avatar
              src="https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/03/16180658/justin-hartley-700x380-1.jpg"
              size="small"
            />,
          ]}
        />
        <BodyWrapper>
          <div className="container">
            {boards.map((board) => (
              <Board board={board} />
            ))}
          </div>
          <LogBoard />
        </BodyWrapper>
      </DashboardWrapper>
    </Transitions>
  );
};

const DashboardWrapper = styled.div`
  width: 100%;
`;

const BodyWrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export default Dashboard;
