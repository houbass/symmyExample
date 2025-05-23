import React from "react";
import { Row, Typography, Spin } from "antd";

// Types
import type { DataItem } from "../global/types";

interface Props {
  children: React.ReactNode;
  isError: any;
  data: undefined | DataItem[];
}

const progressContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "calc(100% - 228px)",
};

function Progress({ children, isError, data }: Props) {
  return (
    <>
      {/* Handling loading and errors while fetching */}
      {isError ? (
        <Row style={progressContainer}>
          <Typography>There was an error while loading.</Typography>
        </Row>
      ) : (
        <>
          {data ? (
            children
          ) : (
            <Row style={progressContainer}>
              <Spin size="large"></Spin>
            </Row>
          )}
        </>
      )}
    </>
  );
}

export default Progress;
