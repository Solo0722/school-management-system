import { Button, Select, Space, Table } from "antd";
import React from "react";
import {
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import styled from "styled-components";
import colors from "../../shared/theme/colors";
import Transitions from "../../shared/utils/Transitions";

const columns = [
  {
    title: "Name",
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
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
    width: "15%",
  },
  {
    title: "Gender",
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
        <strong>Email</strong>
      </h4>
    ),
    dataIndex: "email",
  },
  {
    title: "Address",
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
    title: "Action",
    dataIndex: "action",
    render: () => (
      <Space size="middle">
        <Button
          type="primary"
          size="small"
          icon={<HiOutlinePencilSquare />}
          style={{
            backgroundColor: `${colors.info}`,
            borderColor: `${colors.info}`,
          }}
        />
        <Button
          type="primary"
          size="small"
          icon={<HiOutlineTrash />}
          style={{
            backgroundColor: `${colors.error}`,
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
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    email: "solo123@gmail.com",
    gender: "Male",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const StaffCollection = () => {
  return (
    <Transitions>
      <Wrapper>
        <HeaderWrapper>
          <Space>
            <Select
              defaultValue="lucy"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
            <Button type="primary">Add new teacher</Button>
          </Space>
        </HeaderWrapper>
        <TableWrapper>
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            scroll={{ x: 1500 }}
            bordered
          />
        </TableWrapper>
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
  justify-content: flex-end;
  flex-direction: row;
`;

const TableWrapper = styled.div`
  width: 100%;
  /* margin: 30px 0; */
  position: relative;
`;

export default StaffCollection;
