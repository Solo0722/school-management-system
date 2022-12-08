import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteStudent,
  deleteTeacher,
  getSingleStudent,
  getSingleTeacher,
} from "../../shared/utils/axios";
import styled from "styled-components";
import Transitions from "../../shared/utils/Transitions";
import { Button, message, Modal, Tabs } from "antd";
import { HiXCircle } from "react-icons/hi2";
import colors from "../../shared/utils/colors";
import Spinner from "../../shared/utils/spinner";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Toolbar from "../../shared/components/Toolbar";
import {
  ProfileTab,
  ResultsTab,
  SalaryTab,
  FeesTab,
} from "../../shared/components/Tabs";

const UserDetails = () => {
  const { userType, id } = useParams();
  const [studentDetails, setStudentDetails] = useState(null);
  const [teacherDetails, setTeacherDetails] = useState(null);
  const navigate = useNavigate();

  const getUserDetails = async () => {
    if (userType === "student") {
      await getSingleStudent(id)
        .then(({ data }) => {
          setStudentDetails(data);
        })
        .catch((err) => console.log(err));
    } else if (userType === "staff") {
      await getSingleTeacher(id)
        .then(({ data }) => {
          setTeacherDetails(data);
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteSpecificUser = () => {
    Modal.confirm({
      title: `Delete ${userType === "staff" ? "Teacher" : "Student"}`,
      icon: <ExclamationCircleOutlined />,
      content:
        "Are you sure you want to delete this user from the database? This action is irreversible",
      okText: "Confirm",
      cancelText: "Cancel",
      onOk: async () => {
        navigate(-1);
        userType === "student"
          ? await deleteStudent(id)
          : await deleteTeacher(id);
        message.success("User deleted successfully");
      },
    });
  };

  useEffect(() => {
    getUserDetails();
  }, [id]);

  return (
    <Transitions>
      <StudentDetailWrapper>
        <Toolbar
          title={`${userType === "staff" ? "Teacher" : "Student"} Details`}
          options={[
            <Button
              type="text"
              icon={<HiXCircle color={colors.primary} size={20} />}
              onClick={() => navigate(-1)}
            />,
          ]}
        />
        <BodyWrapper>
          {!studentDetails && !teacherDetails ? (
            <Spinner />
          ) : (
            <TabsWrapper>
              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    label: `Profile`,
                    key: "1",
                    children: (
                      <ProfileTab
                        deleteSpecificUser={deleteSpecificUser}
                        userType={userType}
                        userDetails={
                          userType === "student"
                            ? studentDetails
                            : teacherDetails
                        }
                      />
                    ),
                  },
                  userType === "student" && {
                    label: `Exam Results`,
                    key: "2",
                    children: (
                      <ResultsTab
                        userDetails={
                          userType === "student"
                            ? studentDetails
                            : teacherDetails
                        }
                      />
                    ),
                  },

                  userType === "student" && {
                    label: `School Fees`,
                    key: "3",
                    children: (
                      <FeesTab
                        userDetails={
                          userType === "student"
                            ? studentDetails
                            : teacherDetails
                        }
                      />
                    ),
                  },
                  userType === "staff" && {
                    label: `Salary`,
                    key: "4",
                    children: (
                      <SalaryTab
                        userDetails={
                          userType === "student"
                            ? studentDetails
                            : teacherDetails
                        }
                      />
                    ),
                  },
                ]}
              />
            </TabsWrapper>
          )}
        </BodyWrapper>
      </StudentDetailWrapper>
    </Transitions>
  );
};

const StudentDetailWrapper = styled.div`
  width: 100%;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;
`;

const ImageContainer = styled.div`
  width: 270px;
  height: 270px;
  margin: 30px auto;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export default UserDetails;
