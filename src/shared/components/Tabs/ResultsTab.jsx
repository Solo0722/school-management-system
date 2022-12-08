import { FilePdfFilled, SaveFilled } from "@ant-design/icons";
import { Button, Form, InputNumber, List, message } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { updateStudent } from "../../utils/axios";
import colors from "../../utils/colors";
import { BodyContent } from "./ProfileTab";

const ResultsTab = ({ userDetails: { results, _id } }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log(values);

    const formData = {
      results: {
        Maths: values.Maths,
        Science: values.Science,
        English: values.English,
        Twi: values.Twi,
        French: values.French,
        ICT: values.ICT,
        RME: values.RME,
        History: values.History,
        OWOP: values.OWOP,
      },
    };

    console.log(formData);
    setLoading(true);

    await updateStudent(_id, formData)
      .then(({ data }) => {
        console.log(data);
        message.success("Student's results updated successfully");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const subjects = [
    { name: "Subject", value: "Score" },
    { name: "Maths", value: results.Maths },
    { name: "Science", value: results.Science },
    { name: "English", value: results.English },
    { name: "History", value: results.History },
    { name: "OWOP", value: results.OWOP },
    { name: "RME", value: results.RME },
    { name: "French", value: results.French },
    { name: "Twi", value: results.Twi },
    { name: "ICT", value: results.ICT },
  ];

  return (
    <ResultsWrapper>
      <h2>Results for this semester</h2>
      <ContentWrapper>
        <Form
          name="edit form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            Maths: results.Maths,
            Science: results.Science,
            English: results.English,
            History: results.History,
            OWOP: results.OWOP,
            RME: results.RME,
            French: results.French,
            Twi: results.Twi,
            ICT: results.ICT,
          }}
          layout="horizontal"
          autoComplete="off"
        >
          <List>
            {subjects.map((subject) => (
              <Form.Item name={subject.name}>
                <List.Item
                  style={{
                    borderBottom: "0.3px solid rgba(0,0,0,0.1)",
                  }}
                >
                  {subject.name === "Subject" ? (
                    <h3>{subject.name}</h3>
                  ) : (
                    <p>{subject.name}</p>
                  )}
                  {subject.name === "Subject" ? (
                    <h3>{subject.value}</h3>
                  ) : (
                    <InputNumber
                      min={0}
                      max={100}
                      defaultValue={subject.value}
                    />
                  )}
                </List.Item>
              </Form.Item>
            ))}
          </List>
          <BodyContent>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<SaveFilled />}
              >
                {loading ? "Saving" : "Save"}
              </Button>
              <Button
                type="primary"
                style={{
                  marginLeft: "10px",
                  background: "green",
                  borderColor: "green",
                }}
                icon={<FilePdfFilled />}
              >
                Print Results Slip
              </Button>
            </Form.Item>
          </BodyContent>
        </Form>
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
