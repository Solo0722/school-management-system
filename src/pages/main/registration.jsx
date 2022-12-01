import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  List,
  message,
  Select,
  Upload,
} from "antd";
import React from "react";
import { HiXCircle } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { createStudent } from "../../shared/utils/axios";
import colors from "../../shared/utils/colors";
import Transitions from "../../shared/utils/Transitions";
import { HeadingWrapper } from "./dashboard";

const props = {
  name: "file",
  action:
    "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
  headers: {
    authorization: "authorization-text",
  },
};

const Registration = () => {
  const navigate = useNavigate();
  const { userType } = useParams();

  const [form] = Form.useForm();

  const createNewStudent = async (formData) => {
    await createStudent(formData)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  const onFinish = (values) => {
    const formData = {
      profile: {
        ...values,
        imageURL: values.imageURL.file.thumbUrl,
      },
    };

    createNewStudent(formData);
    message.success("Student added to database successfully");
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const PersonalDetailsSection = () => (
    <>
      <FormItem label="Full Name" style={{ width: "100%" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormItem
            style={{ width: "48%", marginBottom: 0 }}
            name="firstName"
            requiredMark={null}
            rules={[
              {
                required: true,
                message: "Invalid first name!",
              },
            ]}
          >
            <Input placeholder="First" />
          </FormItem>
          <FormItem
            name="lastName"
            style={{ width: "48%", marginBottom: 0 }}
            rules={[
              {
                required: true,
                message: "Invalid last name!",
              },
            ]}
          >
            <Input placeholder="Last" />
          </FormItem>
        </div>
      </FormItem>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FormItem
          label="Date of birth"
          name="dateOfBirth"
          rules={[
            {
              required: true,
              message: "Invalid date of birth!",
            },
          ]}
        >
          <DatePicker style={{ width: "100%" }} />
        </FormItem>
        <FormItem
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Invalid gender selected!",
            },
          ]}
        >
          <Select placeholder="Select gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </FormItem>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FormItem
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your location!",
            },
          ]}
        >
          <Input placeholder="e.g Ejisu" />
        </FormItem>

        <FormItem
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </FormItem>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FormItem
          label="Phone number"
          name="phoneNumber"
          type=""
          rules={[
            {
              required: true,
              message: "Invalid phone number!",
            },
          ]}
        >
          <Input addonBefore="+233" />
        </FormItem>
        <FormItem
          label="Grade"
          name="grade"
          rules={[
            {
              required: true,
              message: "Invalid grade selected!",
            },
          ]}
        >
          <Select placeholder="Select grade">
            <Select.Option value="grade-1">Grade 1</Select.Option>
            <Select.Option value="grade-2">Grade 2</Select.Option>
            <Select.Option value="grade-3">Grade 3</Select.Option>
          </Select>
        </FormItem>
      </div>
      <Form.Item
        label="Description"
        name="description"
        style={{ width: "100%" }}
      >
        <Input.TextArea rows={4} />
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
    </>
  );

  const ParentOrGuardianDetailsSection = () => (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FormItem
          label="Father's Name"
          name="nameOfFather"
          rules={[
            {
              required: true,
              message: "Invalid  name!",
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Phone Number"
          name="phoneNumberOfFather"
          rules={[
            {
              required: true,
              message: "Invalid phone number!",
            },
          ]}
        >
          <Input addonBefore="+233" />
        </FormItem>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FormItem
          label="Mother's Name"
          name="nameOfMother"
          rules={[
            {
              required: true,
              message: "Invalid  name!",
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Phone Number"
          name="phoneNumberOfMother"
          rules={[
            {
              required: true,
              message: "Invalid phone number!",
            },
          ]}
        >
          <Input addonBefore="+233" />
        </FormItem>
      </div>
    </>
  );

  return (
    <Transitions>
      <RegistrationWrapper>
        <HeadingWrapper>
          <h3>Add new {userType}</h3>
          <Button
            type="text"
            icon={<HiXCircle color={colors.primary} size={20} />}
            onClick={() => navigate(-1)}
          />
        </HeadingWrapper>
        <div style={{ width: "100%", padding: "1rem" }}>
          <FormWrapper>
            <Form
              name="registration form"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              autoComplete="off"
            >
              <List>
                <List.Item className="list">
                  <h4>
                    <strong>Personal Details</strong>
                  </h4>
                  <PersonalDetailsSection />
                </List.Item>

                <List.Item className="list">
                  <h4>
                    <strong>Parent or Guardian Details</strong>
                  </h4>
                  <ParentOrGuardianDetailsSection />
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Sign up
                    </Button>
                  </Form.Item>
                </List.Item>
              </List>
            </Form>
          </FormWrapper>
        </div>
      </RegistrationWrapper>
    </Transitions>
  );
};

const RegistrationWrapper = styled.div`
  width: 100%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;

  form {
    width: 100%;
  }

  h4 {
    margin: 10px 0;
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FormItem = styled(Form.Item)`
  width: 48%;
`;

export default Registration;
