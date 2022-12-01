import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteStudent, getSingleStudent } from "../../shared/utils/axios";
import styled from "styled-components";
import Transitions from "../../shared/utils/Transitions";
import { HeadingWrapper } from "./dashboard";
import {
  Button,
  DatePicker,
  Form,
  Input,
  List,
  message,
  Modal,
  Select,
  Tabs,
} from "antd";
import { HiXCircle } from "react-icons/hi2";
import colors from "../../shared/utils/colors";
import { FormWrapper, FormItem } from "./registration";
import Spinner from "../../shared/utils/spinner";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import StudentProfile from "../../shared/components/StudentProfile";
import StudentResults from "../../shared/components/StudentResults";
import StudentFees from "../../shared/components/StudentFees";

const StudentDetail = () => {
  const { id } = useParams();
  const [studentDetails, setStudentDetails] = useState(null);
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);

  const getStudentDetails = async (id) => {
    await getSingleStudent(id)
      .then(({ data }) => {
        setStudentDetails(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const deleteSpecificStudent = (id) => {
    Modal.confirm({
      title: "Delete student",
      icon: <ExclamationCircleOutlined />,
      content:
        "Are you sure you want to delete this student from the database?. This action is irreversible",
      okText: "Confirm",
      cancelText: "Cancel",
      onOk: async () => {
        navigate(-1);
        await deleteStudent(id);
        message.success("Student deleted successfully");
      },
    });
  };

  useEffect(() => {
    getStudentDetails(id);
  }, [id]);

  return (
    <Transitions>
      <StudentDetailWrapper>
        <HeadingWrapper>
          <h3>Student Details</h3>
          <Button
            type="text"
            icon={<HiXCircle color={colors.primary} size={20} />}
            onClick={() => navigate(-1)}
          />
        </HeadingWrapper>
        <BodyWrapper>
          {!studentDetails ? (
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
                      <StudentProfile
                        profile={studentDetails && studentDetails.profile}
                      />
                    ),
                  },
                  {
                    label: `Exam Results`,
                    key: "2",
                    children: (
                      <StudentResults
                        results={studentDetails && studentDetails.results}
                      />
                    ),
                  },
                  {
                    label: `School Fees`,
                    key: "3",
                    children: (
                      <StudentFees
                        fees={studentDetails && studentDetails.fees}
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
  height: 100%;
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

export default StudentDetail;
