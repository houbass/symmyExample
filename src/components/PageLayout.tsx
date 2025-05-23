import React from "react";
import { Flex, Layout } from "antd";
const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

function PageLayout({ children }: Props) {
  return (
    <Flex gap="middle" wrap>
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ paddingTop: "95px" }}>{children}</Content>
      </Layout>
    </Flex>
  );
}

export default PageLayout;
