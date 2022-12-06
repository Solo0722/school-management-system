import { Button, Input, InputNumber, List } from "antd";
import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";

const ResultsTab = ({ userDetails: { results } }) => {
  console.log(results);

  const subjects = [
    { name: "Subject", value: "Score" },
    { name: "Maths", value: results.Maths },
    { name: "Science", value: results.Science },
    { name: "English", value: results.English },
    { name: "History", value: results.History },
    { name: "OWOP", value: results.OWOP },
    { name: "French", value: results.French },
    { name: "Twi", value: results.Twi },
    { name: "ICT", value: results.ICT },
  ];

  return (
    <ResultsWrapper>
      <h2>Results for this semester</h2>
      <ContentWrapper>
        <List>
          {subjects.map((subject) => (
            <List.Item>
              {subject.name === "Subject" ? (
                <h3>{subject.name}</h3>
              ) : (
                <p>{subject.name}</p>
              )}
              {subject.name === "Subject" ? (
                <h3>{subject.value}</h3>
              ) : (
                <InputNumber defaultValue={subject.value} />
              )}
            </List.Item>
          ))}
        </List>
        <Button type="primary" style={{ marginTop: 20 }}>
          Print Results Slip
        </Button>
      </ContentWrapper>
    </ResultsWrapper>
  );
};

const ResultsWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    color: ${colors.primary};
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  margin: 30px 0;
`;

export default ResultsTab;
