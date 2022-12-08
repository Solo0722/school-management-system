import { FilePdfFilled, SaveFilled } from "@ant-design/icons";
import { Button, Divider, Input, InputNumber, List, message } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { updateStudent } from "../../utils/axios";
import colors from "../../utils/colors";

const FeesTab = ({ userDetails: { fees, _id } }) => {
  const feeItems = [
    { name: "Item", value: "Amount(GHS)" },
    { name: "Academic facilities", value: "50" },
    { name: "Tuition", value: "200" },
    { name: "Field Trip", value: "50" },
    { name: "Canteen", value: "130" },
    { name: "Bus", value: "70" },
  ];

  const [loading, setLoading] = useState(false);
  const [amountPaid, setAmountPaid] = useState(fees.paid);

  const handleAmountChange = (value) => {
    setAmountPaid(value);
  };

  const handleSubmitResults = async () => {
    const formData = {
      fees: {
        amount: fees.amount,
        paid: amountPaid,
      },
    };

    console.log(formData);
    setLoading(true);

    await updateStudent(_id, formData)
      .then(({ data }) => {
        console.log(data);
        message.success("Student's fees updated successfully");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FeesWrapper>
      <h2>Fees for {new Date().getFullYear()} academic year</h2>
      <ContentWrapper>
        <List>
          {feeItems.map((item) => (
            <List.Item>
              {item.name === "Item" ? <h3>{item.name}</h3> : <p>{item.name}</p>}
              {item.name === "Item" ? (
                <h3>{item.value}</h3>
              ) : (
                <p>{item.value}</p>
              )}
            </List.Item>
          ))}
        </List>
        <Divider />
        <div className="cont">
          <h4>Total</h4> <h4>{fees.amount}</h4>
        </div>
        <div className="cont">
          <h4 style={{ color: "red" }}>Amount Owed</h4>{" "}
          <h4 style={{ color: "red" }}>{fees.amount - fees.paid}</h4>
        </div>
        <div className="cont">
          <h4 style={{ color: "green" }}>Amount Paid</h4>
          <InputNumber value={amountPaid} onChange={handleAmountChange} />
        </div>

        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <Button
            type="primary"
            loading={loading}
            icon={<SaveFilled />}
            onClick={handleSubmitResults}
          >
            {loading ? "Saving" : "Save"}
          </Button>
          <Button
            type="primary"
            style={{
              marginLeft: "10px",
              background: "green",
              borderColor: "green",
            }}
            icon={<FilePdfFilled />}
          >
            Print Student Bill
          </Button>
        </div>
      </ContentWrapper>
    </FeesWrapper>
  );
};

const FeesWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    color: ${colors.primary};
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  margin: 30px 0;

  .cont {
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export default FeesTab;
