import { Button, Tag } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../shared/utils/colors";
import Transitions from "../../shared/utils/Transitions";
import { HiOutlinePlus } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Toolbar from "../../shared/components/Toolbar";
import GenericTable from "../../shared/components/GenericTable";
import { fetchStaff } from "../../shared/utils/axios";

const Staff = () => {
  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);

  const getAllTeachers = async () => {
    await fetchStaff()
      .then(({ data }) => {
        typeof data === "string" ? setStaff([]) : setStaff(data);
      })
      .catch((err) => {
        console.log(err);
        setStaff([]);
      });
  };

  useEffect(() => {
    getAllTeachers();
  }, []);

  const staffData = staff
    ? staff.map((std) => {
        return {
          key: std._id,
          name: `${std.profile.firstName} ${std.profile.lastName}`,
          email: std.profile.email,
          subjects: std.profile.subjects,
          gender: std.profile.gender,
          age: moment().diff(std.profile.dateOfBirth, "years"),
          address: std.profile.address,
        };
      })
    : [];


  const columns = [
    {
      title: (
        <h4 style={{ color: `${colors.accent}` }}>
          <strong>Full name</strong>
        </h4>
      ),
      dataIndex: "name",
    },
    {
      title: (
        <h4 style={{ color: `${colors.accent}` }}>
          <strong>Age</strong>
        </h4>
      ),
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: (
        <h4 style={{ color: `${colors.accent}` }}>
          <strong>Gender</strong>
        </h4>
      ),
      dataIndex: "gender",

      filters: [
        {
          text: "Male",
          value: "male",
        },
        {
          text: "Female",
          value: "female",
        },
      ],
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: (
        <h4 style={{ color: `${colors.accent}` }}>
          <strong>Subjects</strong>
        </h4>
      ),
      dataIndex: "subjects",
      render: (_, { subjects }) => (
        <>
          {subjects.map((subject) => {
            let color = subject.length > 5 ? "geekblue" : "green";
            if (subject === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={subject}>
                {subject.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),

      filters: [
        {
          text: "Grade 1",
          value: "grade-1",
        },
        {
          text: "Grade 2",
          value: "grade-2",
        },
        {
          text: "Grade 3",
          value: "grade-3",
        },
      ],
      onFilter: (value, record) => record.gender === value,
    },

    {
      title: (
        <h4 style={{ color: `${colors.accent}` }}>
          <strong>Email</strong>
        </h4>
      ),
      dataIndex: "email",
    },
    {
      title: (
        <h4 style={{ color: `${colors.accent}` }}>
          <strong>Address</strong>
        </h4>
      ),
      dataIndex: "address",
    },
  ];

  return (
    <Transitions>
      <StaffWrapper>
        <Toolbar
          title="Staff"
          options={[
            <Button
              type="link"
              onClick={() => navigate("/registration/staff")}
              icon={<HiOutlinePlus style={{ marginRight: 10 }} />}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              New Teacher
            </Button>,
          ]}
        />
        <BodyWrapper>
          <GenericTable data={staffData} type={"staff"} columns={columns} />
        </BodyWrapper>
      </StaffWrapper>
    </Transitions>
  );
};

const StaffWrapper = styled.div`
  width: 100%;
`;

const BodyWrapper = styled.div`
  padding: 0 1rem;
  width: 100%;
  position: relative;
`;

export default Staff;
