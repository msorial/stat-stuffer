import React, { ReactNode } from 'react';
import { Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PageTitle from '../PageTitle';

interface PageHeaderProps {
  pageTitle: string;
  search?: ReactNode;
  parlayPickerPlayer?: ReactNode;
  dashboard?: 'average-overview' | 'parlay-picker' | 'ai-picks';
}

const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  search,
  parlayPickerPlayer,
  dashboard,
}) => {
  const isSmall = useMediaQuery('(max-width: 1247px)');

  return (
    <Flex
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
      gap="lg"
      sx={{ width: '100%', padding: '10px 5px 0px' }}
    >
      {dashboard === 'parlay-picker' ? (
        <Flex
          direction={isSmall ? 'row' : 'column'}
          justify={'space-between'}
          align={isSmall ? 'center' : 'flex-start'}
          sx={{
            width: isSmall ? '100%' : 'auto',
            height: isSmall ? 'auto' : '80%',
          }}
        >
          <PageTitle pageTitle={pageTitle} />

          {parlayPickerPlayer}
        </Flex>
      ) : (
        <PageTitle pageTitle={pageTitle} />
      )}

      {search}
    </Flex>
  );
};

export default PageHeader;
