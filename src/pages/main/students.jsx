import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../shared/utils/colors";
import Transitions from "../../shared/utils/Transitions";
import { HeadingWrapper } from "./dashboard";
import { Table } from "antd";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { fetchStudents } from "../../shared/utils/axios";
import moment from "moment";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Students = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  const getAllStudents = async () => {
    await fetchStudents()
      .then(({ data }) => {
        typeof data === "string" ? setStudents([]) : setStudents(data);
      })
      .catch((err) => {
        console.log(err);
        setStudents([]);
      });
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  const studentsData = students
    ? students.map((std) => {
        return {
          key: std._id,
          name: `${std.profile.firstName} ${std.profile.lastName}`,
          email: std.profile.email,
          grade: std.profile.grade,
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
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
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
          <strong>Grade</strong>
        </h4>
      ),
      dataIndex: "grade",

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
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
    },
    //  {
    //    title: (
    //      <h4 style={{ color: `${colors.accent}` }}>
    //        <strong>Actions</strong>
    //      </h4>
    //    ),
    //    dataIndex: "action",
    //    render: () => (
    //      <Button
    //        size="small"
    //        icon={<HiOutlineTrash />}
    //        style={{
    //          color: `${colors.primary}`,
    //          borderColor: `${colors.primary}`,
    //        }}
    //      />
    //    ),
    //  },
  ];

  return (
    <Transitions>
      <StudentsWrapper>
        <HeadingWrapper className="heading">
          <h3>All Students</h3>
          <Button
            type="primary"
            onClick={() => navigate("/registration/student")}
          >
            New Student
          </Button>
        </HeadingWrapper>
        <BodyWrapper>
          <Table
            rowClassName={(record, index) =>
              index % 2 === 0 ? "table-row-light" : "table-row-dark"
            }
            columns={columns}
            dataSource={studentsData || []}
            onChange={onChange}
            scroll={{ x: 1000, y: 430 }}
            className="table"
            size="small"
            pagination={{
              pageSize: 10,
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => navigate(`/student/${record.key}`), // click row
              };
            }}
          />
        </BodyWrapper>
      </StudentsWrapper>
    </Transitions>
  );
};

const StudentsWrapper = styled.div`
  width: 100%;
  /* overflow-y:hidden; */

  /* .heading {
    margin-bottom: 0px !important;
  } */
`;

const BodyWrapper = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: calc(100vh - 70px);
  /* overflow-y: hidden; */
  position: relative;

  .table {
    width: 100%;
    height: calc(100vh - 70px);
  }

  /* .table tr:nth-child(2n) td {
    background-color: #eee;
  } */

  .table-row-light {
    background-color: #ffffff;
  }
  .table-row-dark {
    background-color: #fbfbfb;
  }
`;

export default Students;
