import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Tabs,
  Upload,
} from "antd";
import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import styled from "styled-components";

const RegistrationForm = ({ formType }) => {
  /* *********************************************************************** */
  //upload functions
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  /* *********************************************************************** */

    const [form] = Form.useForm();


  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const PersonalDetailsSection = () => (
    <>
      {/* <Form.Item
        name="student_img"
        rules={[
          {
            required: true,
            message: "Invalid student image!",
          },
        ]}
        style={{ width: "100%" }}
      >
        <ImgCrop rotate style={{ width: "100%" }}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            style={{ width: "100%" }}
          >
            {fileList.length < 1 && "+ Upload Profile Image"}
          </Upload>
        </ImgCrop>
      </Form.Item> */}
      <Form.Item
        label="Full Name"
        name="full_name"
        rules={[
          {
            required: true,
            message: "Invalid full name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date of birth"
        name="date_of_birth"
        rules={[
          {
            required: true,
            message: "Invalid date of birth!",
          },
        ]}
        style={{ width: "100%" }}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Gender"
        name="gender"
        rules={[
          {
            required: true,
            message: "Invalid gender!",
          },
        ]}
      >
        <Radio.Group>
          <Radio value={"male"}>Male</Radio>
          <Radio value={"female"}>Female</Radio>
          <Radio value={"other"}>Other</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Phone number"
        name="phone_number"
        type=""
        rules={[
          {
            required: true,
            message: "Invalid phone number!",
          },
        ]}
      >
        <Input addonBefore="+233" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your full name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="location_address"
        rules={[
          {
            required: true,
            message: "Please input your full name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Divider />
      <Form.Item
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
      </Form.Item>
    </>
  );
  const ParentOrGuardianDetailsSection = () => (
    <>
      <Form.Item
        label="Father's Name"
        name="name_of_father"
        rules={[
          {
            required: true,
            message: "Invalid  name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone_number_of_father"
        rules={[
          {
            required: true,
            message: "Invalid phone number!",
          },
        ]}
        style={{ width: "100%" }}
      >
        <Input addonBefore="+233" />
      </Form.Item>
      <Form.Item
        label="Occupation"
        name="occupation_of_father"
        rules={[
          {
            required: true,
            message: "Invalid occupation!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Divider />
      <Form.Item
        label="Mother's Name"
        name="name_of_mother"
        rules={[
          {
            required: true,
            message: "Invalid  name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone_number_of_mother"
        rules={[
          {
            required: true,
            message: "Invalid phone number!",
          },
        ]}
        style={{ width: "100%" }}
      >
        <Input addonBefore="+233" />
      </Form.Item>
      <Form.Item
        label="Occupation"
        name="occupation_of_mother"
        rules={[
          {
            required: true,
            message: "Invalid occupation!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
  const AccountDetailsSection = () => (
    <>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Invalid  username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Invalid password!",
          },
        ]}
        style={{ width: "100%" }}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirm_password"
        rules={[
          {
            required: true,
            message: "Invalid password!",
          },
        ]}
        style={{ width: "100%" }}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Sign in
        </Button>
      </Form.Item>
    </>
  );

  return (
    <FormWrapper>
      <Form
        name="registration form"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        layout="vertical"
        autoComplete="off"
      >
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Personal Details" key="1">
            <PersonalDetailsSection />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Parent/Guardian Details" key="2">
            <ParentOrGuardianDetailsSection />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Account Details" key="3">
            <AccountDetailsSection />
          </Tabs.TabPane>
        </Tabs>
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  padding: 10px;

  form {
    width: 100%;
  }
`;

export default RegistrationForm;
