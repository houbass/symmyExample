import React from "react";
import { Row, Typography } from "antd";

interface Props {
  children: React.ReactNode;
  isError: any;
}

const progressContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "calc(100% - 228px)",
};

function Progress({ children, isError }: Props) {
  return (
    <>
      {/* Handling errors while fetching */}
      {isError ? (
        <Row style={progressContainer}>
          <Typography>There was an error while loading.</Typography>
        </Row>
      ) : (
        children
      )}
    </>
  );
}

export default Progress;
