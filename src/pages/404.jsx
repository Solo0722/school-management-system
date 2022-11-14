import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Transitions from "../shared/utils/Transitions";

const PageNotFound = () => {
  return (
    <Transitions>
      <Result
        // status="404"
        icon={
          <img src="/images/error-404.png" alt="" width={300} height={300} />
        }
        title="Page Not Found"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </Transitions>
  );
};

export default PageNotFound;
