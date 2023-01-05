import React from 'react';
import { Flex, Grid, Skeleton } from '@mantine/core';
import PageHeader from '../../components/Dashboard/PageHeader/PageHeader';
import PlayerRow from '../../components/Dashboard/PlayerRow';
import PlayerSearch from '../../components/Dashboard/PlayerSearch';

const AvgOverviewDashboard: React.FC = () => {
  return (
    <Flex align="stretch" direction="column" gap="lg" sx={{ height: '100%' }}>
      <PageHeader
        pageTitle={'Average Overview'}
        search={<PlayerSearch />}
        dashboard="average-overview"
      />

      <PlayerRow />

      <Grid grow sx={{ height: '100%' }}>
        <Grid.Col lg={4} md={6} sm={6} xs={12}>
          <Skeleton visible={true} sx={{ height: '100%' }} />
        </Grid.Col>
        <Grid.Col lg={4} md={6} sm={6} xs={12}>
          <Skeleton visible={true} sx={{ height: '100%' }} />
        </Grid.Col>
        <Grid.Col lg={4} md={6} sm={6} xs={12}>
          <Skeleton visible={true} sx={{ height: '100%' }} />
        </Grid.Col>
        <Grid.Col lg={6}>
          <Skeleton visible={true} sx={{ height: '100%' }} />
        </Grid.Col>
        <Grid.Col lg={6}>
          <Skeleton visible={true} sx={{ height: '100%' }} />
        </Grid.Col>
        <Grid.Col lg={12}>
          <Skeleton visible={true} sx={{ height: '100%' }} />
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default AvgOverviewDashboard;
