import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";
import styled from "styled-components";
import colors from "../utils/colors";

const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    annotations: [
      // 低于中位数颜色变化
      {
        type: "regionFilter",
        start: ["min", "median"],
        end: ["max", "0"],
        color: `${colors.primary}`,
      },
      {
        type: "text",
        position: ["min", "median"],
        content: "中位数",
        offsetY: -4,
        style: {
          textBaseline: "bottom",
        },
      },
      {
        type: "line",
        start: ["min", "median"],
        end: ["max", "median"],
        style: {
          stroke: `${colors.secondary}`,
          lineDash: [2, 2],
        },
      },
    ],
  };

  return (
    <GraphWrapper>
      <h3>Staff attendance</h3>
      <Line {...config} />
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

export default DemoLine;
