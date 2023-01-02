import React, { ReactNode } from 'react';
import { Flex, Title } from '@mantine/core';

interface PageHeaderProps {
  pageTitle: string;
  extra?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageTitle, extra }) => {
  return (
    <Flex
      justify="space-between"
      direction="row"
      wrap="wrap"
      gap="xl"
      sx={{ width: '100%', padding: '10px 0px 0px' }}
    >
      <Title
        order={2}
        fw={600}
        variant="gradient"
        gradient={{ from: '#ff8a00', to: '#da1b60', deg: 45 }}
      >
        {pageTitle}
      </Title>

      {extra}
    </Flex>
  );
};

export default PageHeader;
