import React from "react";
import { Row, Col } from "antd";
import {
  GithubOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import PageFooterStyled from "./PageFooterStyles";

const PageFooter: React.FC = () => {
  return (
    <PageFooterStyled>
      <Row gutter={[24, 16]} align="middle">
        <Col flex={4} style={{ textAlign: "left" }}>
          <Logo />
        </Col>

        <Col>
          <a href="https://www.linkedin.com/in/mark-sor/">
            <LinkedinOutlined />
          </a>
        </Col>
        <Col>
          <a href="https://github.com/msorial">
            <GithubOutlined />
          </a>
        </Col>
        <Col>
          <a href="https://www.google.com/">
            <GoogleOutlined />
          </a>
        </Col>
      </Row>
    </PageFooterStyled>
  );
};

export default PageFooter;
