import React, { useState, useEffect } from "react";
import { DualAxes } from "@ant-design/plots";
import styled from "styled-components";

const DemoArea = () => {
  const uvBillData = [
    {
      time: "2019-03",
      value: 350,
      type: "uv",
    },
    {
      time: "2019-04",
      value: 900,
      type: "uv",
    },
    {
      time: "2019-05",
      value: 300,
      type: "uv",
    },
    {
      time: "2019-06",
      value: 450,
      type: "uv",
    },
    {
      time: "2019-07",
      value: 470,
      type: "uv",
    },
    {
      time: "2019-03",
      value: 220,
      type: "bill",
    },
    {
      time: "2019-04",
      value: 300,
      type: "bill",
    },
    {
      time: "2019-05",
      value: 250,
      type: "bill",
    },
    {
      time: "2019-06",
      value: 220,
      type: "bill",
    },
    {
      time: "2019-07",
      value: 362,
      type: "bill",
    },
  ];
  const transformData = [
    {
      time: "2019-03",
      count: 800,
    },
    {
      time: "2019-04",
      count: 600,
    },
    {
      time: "2019-05",
      count: 400,
    },
    {
      time: "2019-06",
      count: 380,
    },
    {
      time: "2019-07",
      count: 220,
    },
  ];
  const config = {
    data: [uvBillData, transformData],
    xField: "time",
    yField: ["value", "count"],
    geometryOptions: [
      {
        geometry: "column",
        isStack: true,
        seriesField: "type",
      },
      {
        geometry: "line",
      },
    ],
  };

  return (
    <GraphWrapper>
      <h3>Students' grades</h3>
      <DualAxes {...config} />
    </GraphWrapper>
  );
};

const GraphWrapper = styled.div`
  width: 100%;
  height: 350px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 15px;
  }
`;

export default DemoArea;
