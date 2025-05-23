import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { Row, Typography, Spin } from "antd";
const progressContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100% - 228px)",
};
function Progress({ children, isError, data }) {
    return (_jsx(_Fragment, { children: isError ? (_jsx(Row, { style: progressContainer, children: _jsx(Typography, { children: "There was an error while loading." }) })) : (_jsx(_Fragment, { children: data ? (children) : (_jsx(Row, { style: progressContainer, children: _jsx(Spin, { size: "large" }) })) })) }));
}
export default Progress;
