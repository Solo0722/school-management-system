import { Table } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GenericTable = ({ type, columns, data }) => {
  const navigate = useNavigate();

  return (
    <TableWrapper>
      <Table
        sticky
        bordered
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        columns={columns || []}
        dataSource={data || []}
        scroll={{ x: 1000 }}
        className="table"
        size="small"
        pagination={{
          pageSize: 10,
        }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => navigate(`/${type}/${record.key}`),
          };
        }}
      />
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  width: 100%;

  .table {
    width: 100%;
  }

  /* .table tr:nth-child(2n) td {
    background-color: #eee;
  } */

  .table-row-light {
    background-color: #ffffff;
    cursor: pointer;
  }
  .table-row-dark {
    background-color: #fbfbfb;
    cursor: pointer;
  }

  .ant-table-thead .ant-table-cell {
    background-color: #eee;
  }
`;

export default GenericTable;
