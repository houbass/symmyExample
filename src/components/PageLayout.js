import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Flex, Layout } from "antd";
const { Content } = Layout;
function PageLayout({ children }) {
    return (_jsx(Flex, { gap: "middle", wrap: true, children: _jsx(Layout, { style: { minHeight: "100vh" }, children: _jsx(Content, { style: { paddingTop: "95px" }, children: children }) }) }));
}
export default PageLayout;
