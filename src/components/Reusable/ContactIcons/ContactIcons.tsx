import { ReactNode } from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { Flex, Tooltip } from '@mantine/core';

const StyledSocialIcons = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    color: #eb344c;
  }
`;

interface ContactItemProps {
  app: string;
  icon: ReactNode;
  link: string;
  label: string;
}

const contactItems: ContactItemProps[] = [
  {
    app: 'LinkedIn',
    icon: <LinkedinOutlined />,
    link: 'https://www.linkedin.com/in/mark-sor/',
    label: 'Connect with Me',
  },
  {
    app: 'GitHub',
    icon: <GithubOutlined />,
    link: 'https://www.linkedin.com/in/mark-sor/',
    label: 'View other Projects',
  },
  {
    app: 'Email',
    icon: <MailOutlined />,
    link: 'mailto: msorial98@gmail.com',
    label: 'Email Me',
  },
];

const ContactIcons: React.FC = () => {
  return (
    <Flex justify="center" align="center" direction="row" gap="lg">
      {contactItems.map((item) => {
        return (
          <Tooltip key={item.app} label={item.label} offset={10}>
            <StyledSocialIcons href={item.link}>{item.icon}</StyledSocialIcons>
          </Tooltip>
        );
      })}
    </Flex>
  );
};

export default ContactIcons;
