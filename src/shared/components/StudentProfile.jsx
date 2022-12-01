import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const StudentProfile = ({ profile }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [isEdit, setIsEdit] = useState(true);

  return (
    <ProfileWrapper>
      <ImageContainer>
        <img src={profile.imageURL} alt="profile-img" />
      </ImageContainer>
      <ContentContainer>
        <Form
          name="basic"
          labelCol={{
            span: 3,
          }}
          wrapperCol={{
            span: 28,
          }}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="firstName"
            requiredMark={null}
            label={
              <label>
                <strong>First Name</strong>
              </label>
            }
            rules={[
              {
                required: true,
                message: "Invalid first name!",
              },
            ]}
          >
            {isEdit ? <Input /> : <p>{profile.firstName}</p>}
          </Form.Item>
          <Form.Item
            requiredMark={null}
            name="lastName"
            label={
              <label>
                <strong>Last Name</strong>
              </label>
            }
            rules={[
              {
                required: true,
                message: "Invalid last name!",
              },
            ]}
          >
            {isEdit ? <Input /> : <p>{profile.lastName}</p>}
          </Form.Item>

          <Form.Item
            requiredMark={null}
            label={
              <label>
                <strong>Date of birth</strong>
              </label>
            }
            name="dateOfBirth"
            rules={[
              {
                required: true,
                message: "Invalid date of birth!",
              },
            ]}
          >
            {isEdit ? (
              <DatePicker style={{ width: "100%" }} />
            ) : (
              <p>{profile.dateOfBirth}</p>
            )}
          </Form.Item>
          <Form.Item
            requiredMark={null}
            label={
              <label>
                <strong>Gender</strong>
              </label>
            }
            name="gender"
            rules={[
              {
                required: true,
                message: "Invalid gender selected!",
              },
            ]}
          >
            {isEdit ? (
              <Select>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
                <Select.Option value="other">Other</Select.Option>
              </Select>
            ) : (
              <p>{profile.gender}</p>
            )}
          </Form.Item>

          <Form.Item
            requiredMark={null}
            label={
              <label>
                <strong>Adress</strong>
              </label>
            }
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your location!",
              },
            ]}
          >
            {isEdit ? <Input /> : <p>{profile.address}</p>}
          </Form.Item>

          <Form.Item
            requiredMark={null}
            label={
              <label>
                <strong>Email</strong>
              </label>
            }
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            {isEdit ? <Input /> : <p>{profile.email}</p>}
          </Form.Item>

          <Form.Item
            requiredMark={null}
            label={
              <label>
                <strong>Phone Number</strong>
              </label>
            }
            name="phoneNumber"
            type=""
            rules={[
              {
                required: true,
                message: "Invalid phone number!",
              },
            ]}
          >
            {isEdit ? (
              <Input addonBefore="+233" />
            ) : (
              <p>{profile.phoneNumber}</p>
            )}
          </Form.Item>
          <Form.Item
            requiredMark={null}
            label={
              <label>
                <strong>Grade</strong>
              </label>
            }
            name="grade"
            rules={[
              {
                required: true,
                message: "Invalid grade selected!",
              },
            ]}
          >
            {isEdit ? (
              <Select>
                <Select.Option value="grade-1">Grade 1</Select.Option>
                <Select.Option value="grade-2">Grade 2</Select.Option>
                <Select.Option value="grade-3">Grade 3</Select.Option>
              </Select>
            ) : (
              <p>{profile.grade}</p>
            )}
          </Form.Item>
          <Form.Item
            requiredMark={null}
            label={
              <label>
                <strong>Description</strong>
              </label>
            }
            name="description"
            style={{ width: "100%" }}
          >
            {isEdit ? (
              <Input.TextArea rows={4} />
            ) : (
              <p>{profile.description}</p>
            )}
          </Form.Item>

          <Form.Item
            name="imageURL"
            rules={[
              {
                required: true,
                message: "Invalid student image!",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Upload listType="picture" maxCount={1} {...props}>
              <Button icon={<UploadOutlined />} block style={{ width: "100%" }}>
                Click to upload student image
              </Button>
            </Upload>
          </Form.Item>
        </Form>
      </ContentContainer>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  margin: 1rem;
`;
const ContentContainer = styled.div``;

export default StudentProfile;

const props = {
  name: "file",
  action:
    "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
  headers: {
    authorization: "authorization-text",
  },
};
