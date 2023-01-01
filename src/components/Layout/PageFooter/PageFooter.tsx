import React from 'react';
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { Footer, Flex } from '@mantine/core';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/logo/logo.svg';

const StyledSocialIcons = styled.a`
  transform: scale(0.9);
  transition: 0.5s;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: scale(0.9) translateY(-10px);
    color: #eb344c;
  }
`;

const PageFooter: React.FC = () => {
  return (
    <Footer height={75} p="md">
      <Flex justify="space-between" align="center" direction="row">
        <Logo />

        <Flex justify="center" align="center" direction="row" gap="lg" mr={4}>
          <StyledSocialIcons href="https://www.linkedin.com/in/mark-sor/">
            <LinkedinOutlined />
          </StyledSocialIcons>
          <StyledSocialIcons href="https://github.com/msorial">
            <GithubOutlined />
          </StyledSocialIcons>
          <StyledSocialIcons href="https://www.google.com/">
            <MailOutlined />{' '}
          </StyledSocialIcons>
        </Flex>
      </Flex>
    </Footer>
  );
};

export default PageFooter;
