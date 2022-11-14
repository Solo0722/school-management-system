import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
import {
  HiOutlineIdentification,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi2";
import Transitions from "../../shared/utils/Transitions";

const Auth = () => {
  const { authId } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);

    

    navigate(`/${authId}-portal`);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Transitions>
      <AuthWrapper>
        <FormWrapper>
          <Titlebar>
            <img src="/images/logo-512.png" alt="school-badge" />
            <h3>{authId.toLocaleUpperCase()} PORTAL</h3>
          </Titlebar>
          <Form
            name={`${authId} form`}
            form={form}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              style={{ margin: "15px 0" }}
              name="username"
              rules={[
                {
                  required: true,
                  message: "Invalid username!",
                },
              ]}
            >
              <Input placeholder="Username" prefix={<HiOutlineUser />} />
            </Form.Item>

            <Form.Item
              style={{ margin: "15px 0" }}
              name="userID"
              rules={[
                {
                  required: true,
                  message: `Invalid ${authId
                    .slice(0, 1)
                    .toLocaleUpperCase()}${authId
                    .slice(1)
                    .toLocaleLowerCase()} ID!`,
                  min: 10,
                },
              ]}
            >
              <Input
                placeholder={`${authId.slice(0, 1).toLocaleUpperCase()}${authId
                  .slice(1)
                  .toLocaleLowerCase()} ID`}
                prefix={<HiOutlineIdentification />}
              />
            </Form.Item>

            <Form.Item
              style={{ margin: "15px 0" }}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Invalid password!",
                  min: 8,
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                prefix={<HiOutlineLockClosed />}
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign in
              </Button>
            </Form.Item>
          </Form>
          <a href="/">Fogot password?</a>
        </FormWrapper>
      </AuthWrapper>
    </Transitions>
  );
};

const AuthWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Titlebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0;

  h3 {
    text-align: center;
    margin: 5px 0;
  }

  img {
    width: 70px;
    height: 70px;
  }
`;

const FormWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  min-height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;

  form {
    width: 100%;
  }

  a {
    color: teal;
  }

  @media screen and (min-width: 486px) and (max-width: 768px) {
    & {
      width: 70%;
    }
  }

  @media screen and (max-width: 486px) {
    & {
      width: 90%;
    }
  }
`;

export default Auth;
