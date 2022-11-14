import { Button, Modal, Space, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import styled from "styled-components";
import colors from "../../shared/theme/colors";
import Transitions from "../../shared/utils/Transitions";
import RegistrationForm from "./registrationForm";

const columns = [
  {
    title: (
      <h4>
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
      <h4>
        <strong>Age</strong>
      </h4>
    ),
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
    width: "15%",
  },
  {
    title: (
      <h4>
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
      <h4>
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
      <h4>
        <strong>Email</strong>
      </h4>
    ),
    dataIndex: "email",
  },
  {
    title: (
      <h4>
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
  {
    title: (
      <h4>
        <strong>Actions</strong>
      </h4>
    ),
    dataIndex: "action",
    render: () => (
      <Space size="middle">
        <Button
          size="small"
          icon={<HiOutlinePencilSquare />}
          style={{
            color: `${colors.info}`,
            borderColor: `${colors.info}`,
          }}
        />
        <Button
          size="small"
          icon={<HiOutlineTrash />}
          style={{
            color: `${colors.error}`,
            borderColor: `${colors.error}`,
          }}
        />
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    email: "solo123@gmail.com",
    gender: "Male",
    grade: 2,
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    email: "solo123@gmail.com",
    grade: 3,
    gender: "Male",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    email: "solo123@gmail.com",
    grade: 3,
    gender: "Male",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    grade: 1,
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    grade: 1,
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    grade: 1,
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    grade: 1,
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const StudentsCollection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Transitions>
      <Wrapper>
        <HeaderWrapper>
          <h3>Total Students: 455</h3>
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            New Student
          </Button>
        </HeaderWrapper>
        <TableWrapper>
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            scroll={{ x: 1500 }}
            className="table"
          />
        </TableWrapper>
        <Modal
          title="Student Registration Form"
          centered
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width="70%"
          bodyStyle={{ minHeight: "400px" }}
          footer={null}
        >
          <RegistrationForm formType="student" />
        </Modal>
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const TableWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  position: relative;
`;

export default StudentsCollection;
