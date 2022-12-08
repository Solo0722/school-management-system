import {
  EditFilled,
  DeleteFilled,
  UploadOutlined,
  SaveFilled,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  message,
  Select,
  Space,
  Upload,
} from "antd";
import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { updateStudent, updateTeacher } from "../../utils/axios";
import colors from "../../utils/colors";

const props = {
  name: "file",
  action:
    "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
  headers: {
    authorization: "authorization-text",
  },
  onChange: (e) => console.log(e),
};

const ProfileTab = ({
  deleteSpecificUser,
  userType,
  userDetails: { profile, _id },
}) => {
  const [form] = Form.useForm();

  const subjectOptions = [
    { label: "Mathematics", value: "Mathematics" },
    { label: "English", value: "English" },
    { label: "Science", value: "Science" },
    { label: "History", value: "History" },
    { label: "ICT", value: "ICT" },
    { label: "OWOP", value: "OWOP" },
    { label: "RME", value: "RME" },
    { label: "Twi", value: "Twi" },
    { label: "French", value: "French" },
  ];

  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const formData = {
      profile: {
        ...values,
      },
    };

    console.log(formData);
    setLoading(true);

    if (userType === "student") {
      await updateStudent(_id, formData)
        .then(({ data }) => {
          console.log(data);
          message.success("Student updated successfully");
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else if (userType === "staff") {
      await updateTeacher(_id, formData)
        .then(({ data }) => {
          console.log(data);
          message.success("Teacher updated successfully");
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ProfileWrapper>
      <div className="space">
        <ProfileImg src={profile.imageURL} alt="profile-img" />
        <h2>
          {profile.firstName} {profile.lastName}
        </h2>
      </div>
      <Divider />

      <Form
        name="edit form"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          firstName: profile.firstName,
          lastName: profile.lastName,
          gender: profile.gender,
          address: profile.address,
          email: profile.email,
          phoneNumber: profile.phoneNumber,
          grade: profile?.grade,
          dateOfBirth: moment(profile.dateOfBirth),
          subjects: profile?.subjects || [],
          description: profile.description || "",
          nameOfFather: profile?.nameOfFather,
          nameOfMother: profile?.nameOfMother,
          phoneNumberOfMother: profile?.phoneNumberOfMother,
          phoneNumberOfFather: profile?.phoneNumberOfFather,
          imageURL: profile.imageURL,
        }}
        layout="vertical"
        autoComplete="off"
      >
        <BodyContent>
          <FormItem
            label="First name"
            name="firstName"
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
            label="Last name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Invalid last name!",
              },
            ]}
          >
            <Input placeholder="Last" />
          </FormItem>

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

          {userType === "student" ? (
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
          ) : (
            <FormItem
              label="Subjects"
              name="subjects"
              rules={[
                {
                  required: true,
                  message: "Invalid subjects selected!",
                },
              ]}
            >
              <Select
                placeholder="Select subjects you teach"
                mode={"tags"}
                options={subjectOptions}
              />
            </FormItem>
          )}
          <FormItem
            label="Description"
            name="description"
            style={{ width: "100%" }}
          >
            <Input.TextArea rows={4} />
          </FormItem>

          <FormItem
            name="imageURL"
            rules={[
              {
                required: true,
                message: "Invalid user image!",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Upload listType="picture" maxCount={1} {...props}>
              <Button icon={<UploadOutlined />} block style={{ width: "100%" }}>
                Click to upload image
              </Button>
            </Upload>
          </FormItem>
        </BodyContent>
        <Divider />
        {userType === "student" && (
          <BodyContent>
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
          </BodyContent>
        )}
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
              icon={<DeleteFilled />}
              onClick={deleteSpecificUser}
              style={{
                marginLeft: "10px",
                background: "red",
                borderColor: "red",
              }}
            >
              Delete
            </Button>
          </Form.Item>
        </BodyContent>
      </Form>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    color: ${colors.primary};
  }

  & .space {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ProfileImg = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
  /* border: 1px solid ${colors.primary}; */
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
  margin: 15px 0;
`;

export const BodyContent = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  /* text-align: center; */
  flex-wrap: wrap;

  & .container {
    width: 48%;
    margin: 10px;
  }
`;

const FormItem = styled(Form.Item)`
  width: 48%;
  margin: 10px;

  @media screen and (max-width: 600px) {
    & {
      width: 90%;
    }
  }
`;

export default ProfileTab;
