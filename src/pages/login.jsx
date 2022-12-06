import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi2";
import Transitions from "../shared/utils/Transitions";
import { GlobalContext } from "../context/context";
import colors from "../shared/utils/colors";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { setLoginDetails, setLoginDates, loginDates } =
    useContext(GlobalContext);

  const onFinish = (values) => {
    console.log("Success:", values);

    if (values.username === "admin" && values.password === "test123") {
      setLoginDetails({
        username: values.username,
        password: values.password,
      });
      setLoginDates([...loginDates, new Date()]);
      form.resetFields();
      navigate("/");
    } else {
      message.error("Incorrect login details. Try again!");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Transitions>
      <LoginWrapper>
        <FormWrapper>
          <Titlebar>
            <img src="/images/logo-512.png" alt="school-badge" />
            <h3>
              <span>Skyline</span>
              &nbsp;
              <span style={{ color: `${colors.accent}` }}>College</span>
            </h3>
          </Titlebar>
          <Form
            name={`login form`}
            form={form}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
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
              name="password"
              rules={[
                {
                  required: true,
                  message: "Invalid password!",
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
        </FormWrapper>
      </LoginWrapper>
    </Transitions>
  );
};

const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Titlebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0;

  h3 {
    text-align: center;
    margin: 5px 0;
    color: ${colors.primary};
  }

  img {
    width: 70px;
    height: 70px;
  }
`;

export default Login;
