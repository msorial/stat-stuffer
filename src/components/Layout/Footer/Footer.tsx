import React from 'react';
import {
  GithubOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import Col from 'antd/es/col';
import Row from 'antd/es/row';
import { ReactComponent as Logo } from '../../../assets/logo/logo.svg';
import StyledFooter from './FooterStyles';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Row gutter={[24, 16]} align="middle">
        <Col flex={4} style={{ textAlign: 'left' }}>
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
    </StyledFooter>
  );
};

export default Footer;
