import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { useSelector } from 'react-redux';
import { PlayerProps, selectPlayers } from '../../app/reducers/playerSlice';
import PageHeader from '../../components/Dashboard/PageHeader/PageHeader';
import PlayerRow from '../../components/Dashboard/PlayerRow';
import PlayerSearch from '../../components/Dashboard/PlayerSearch';
import BeginSearch from '../../components/Reusable/BeginSearch';
import AssistsLeader from '../../components/Visualizations/AvgOverview/AssistsLeader';
import FgPctLeader from '../../components/Visualizations/AvgOverview/FgPctLeader';
import PointsLeader from '../../components/Visualizations/AvgOverview/PointsLeader';
import ReboundsLeader from '../../components/Visualizations/AvgOverview/ReboundsLeader';

const AvgOverviewDashboard: React.FC = () => {
  const pickPlayers: PlayerProps[] = useSelector(selectPlayers);

  return (
    <Flex align="stretch" direction="column" gap="lg" sx={{ height: '100%' }}>
      <PageHeader
        pageTitle={'Average Overview'}
        search={<PlayerSearch />}
        dashboard="average-overview"
      />

      <PlayerRow />

      {pickPlayers.length === 0 ? (
        <BeginSearch title="Search for Players" />
      ) : (
        <Grid grow sx={{ height: '100%' }}>
          <Grid.Col lg={4} md={6} sm={6} xs={12}>
            <PointsLeader />
          </Grid.Col>
          <Grid.Col lg={4} md={6} sm={6} xs={12}>
            <ReboundsLeader />
          </Grid.Col>
          <Grid.Col lg={4} md={6} sm={6} xs={12}>
            <AssistsLeader />
          </Grid.Col>

          <Grid.Col lg={12}>
            <FgPctLeader />
          </Grid.Col>
        </Grid>
      )}
    </Flex>
  );
};

export default AvgOverviewDashboard;
