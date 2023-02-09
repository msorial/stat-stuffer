import React from 'react';
import { Flex, Grid, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import { PickerProps, selectPlayerStats } from '../../app/reducers/pickerSlice';
import PageHeader from '../../components/Dashboard/PageHeader/PageHeader';
import PicksSearch from '../../components/Dashboard/PicksSearch';
import PicksTag from '../../components/Dashboard/PicksTag';
import BeginSearch from '../../components/Reusable/BeginSearch';
import GameLogs from '../../components/Visualizations/ParlayPicker/GameLogs';
import HitStreak from '../../components/Visualizations/ParlayPicker/HitStreak';
import { ParlayPickerVisualizations } from '../../components/Visualizations/ParlayPicker/ParlayPickerVisualizations';

const ParlayPicker: React.FC = () => {
  const pickPlayerGames: PickerProps[] = useSelector(selectPlayerStats);

  return (
    <Flex align="stretch" direction="column" gap="lg" sx={{ height: '100%' }}>
      <PageHeader
        pageTitle={'Parlay Picker'}
        search={<PicksSearch />}
        dashboard="parlay-picker"
        parlayPickerPlayer={<PicksTag />}
      />

      {pickPlayerGames.length === 0 ? (
        <BeginSearch title="Search for Prop" dashboard="parlay-picker" />
      ) : (
        <Grid gutter="md">
          {ParlayPickerVisualizations.map((viz) => {
            return (
              <Grid.Col lg={4} md={6} sm={6} xs={12} key={viz.key}>
                {viz.viz}
              </Grid.Col>
            );
          })}
          <Grid.Col lg={4} md={12} sm={12} xs={12}>
            <HitStreak />
          </Grid.Col>
          <Grid.Col span={12} sx={{ padding: '10px 5px 0px' }}>
            <Text
              color="dimmed"
              size="md"
              transform="uppercase"
              sx={{ marginLeft: '10px' }}
            >
              Game Logs
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <GameLogs />
          </Grid.Col>
        </Grid>
      )}
    </Flex>
  );
};

export default ParlayPicker;
