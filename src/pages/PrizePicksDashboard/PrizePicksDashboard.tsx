import React from 'react';
import { Center, Grid, Loader, Stack, Text } from '@mantine/core';
import PageHeader from '../../components/Dashboard/PageHeader/PageHeader';
import PicksSearch from '../../components/Dashboard/PicksSearch';
import PicksTag from '../../components/Dashboard/PicksTag';

const AvgOverviewDashboard: React.FC = () => {
  return (
    <Grid grow sx={{ height: '100%' }}>
      <Grid.Col span={12}>
        <PageHeader
          pageTitle={'Prize Picker'}
          search={<PicksSearch />}
          dashboard="prize-picker"
          prizePicksPlayer={<PicksTag />}
        />
      </Grid.Col>

      <Grid.Col span={12}>
        <Center sx={{ width: '100%', flex: 1 }}>
          <Stack justify="center" align="center">
            <Loader size="lg" variant="dots" color="red" />
            <Text
              variant="gradient"
              gradient={{ from: '#ff8a00', to: '#da1b60', deg: 45 }}
              sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
              size="xl"
              weight={700}
            >
              Coming soon!
            </Text>
          </Stack>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default AvgOverviewDashboard;
