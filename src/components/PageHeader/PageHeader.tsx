import React from "react";
import { Layout, Input, Affix } from "antd";

const { Header } = Layout;

const PageHeader: React.FC = () => {
  return (
    <Affix offsetTop={0}>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          marginBottom: "20px",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <Input placeholder="Basic usage" style={{ width: "200px" }} />
      </Header>
    </Affix>
  );
};

export default PageHeader;
