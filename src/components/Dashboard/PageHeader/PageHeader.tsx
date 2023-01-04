import React, { ReactNode } from 'react';
import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PageTitle from '../PageTitle';

interface PageHeaderProps {
  pageTitle: string;
  search?: ReactNode;
  prizePicksPlayer?: ReactNode;
  dashboard?: 'average-overview' | 'prize-picker';
}

const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  search,
  prizePicksPlayer,
  dashboard,
}) => {
  const isSmall = useMediaQuery('(max-width: 1247px)');

  return (
    <Flex
      justify="space-between"
      direction="row"
      wrap="wrap"
      gap="lg"
      sx={{ width: '100%', padding: '10px 5px 0px' }}
    >
      {dashboard === 'prize-picker' ? (
        <Flex
          direction={isSmall ? 'row' : 'column'}
          justify={isSmall ? 'space-between' : 'space-around'}
          align={isSmall ? 'center' : 'flex-start'}
          sx={{ width: isSmall ? '100%' : 'auto' }}
        >
          <PageTitle pageTitle={pageTitle} />

          {prizePicksPlayer}
        </Flex>
      ) : (
        <PageTitle pageTitle={pageTitle} />
      )}

      {search}
    </Flex>
  );
};

export default PageHeader;
