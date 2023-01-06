import React from 'react';
import { Flex, Grid, Paper, Stack } from '@mantine/core';
import { useSelector } from 'react-redux';
import { PickerProps, selectPlayerStats } from '../../app/reducers/pickerSlice';
import PageHeader from '../../components/Dashboard/PageHeader/PageHeader';
import PicksSearch from '../../components/Dashboard/PicksSearch';
import PicksTag from '../../components/Dashboard/PicksTag';
import BeginSearch from '../../components/Reusable/BeginSearch';
import HitStreak from '../../components/Visualizations/PrizePicks/HitStreak';
import { PrizePickVisualizations } from '../../components/Visualizations/PrizePicks/PrizePickVisualizations';

const PrizePicksDashboard: React.FC = () => {
  const pickPlayerGames: PickerProps[] = useSelector(selectPlayerStats);

  return (
    <Flex align="stretch" direction="column" gap="lg" sx={{ height: '100%' }}>
      <PageHeader
        pageTitle={'Prize Picker'}
        search={<PicksSearch />}
        dashboard="prize-picker"
        prizePicksPlayer={<PicksTag />}
      />

      {pickPlayerGames.length === 0 ? (
        <BeginSearch />
      ) : (
        <Grid gutter="md">
          {PrizePickVisualizations.map((viz) => {
            return (
              <Grid.Col lg={4} md={6} sm={6} xs={12}>
                {viz}
              </Grid.Col>
            );
          })}
          <Grid.Col lg={4} md={12} sm={12} xs={12}>
            <HitStreak />
          </Grid.Col>
          <Grid.Col span={12}>
            <Stack>
              {pickPlayerGames.map((game: PickerProps) => {
                return (
                  <Paper withBorder radius="md" p="xs" sx={{}}>
                    {game.fgm}
                  </Paper>
                );
              })}
            </Stack>
          </Grid.Col>
        </Grid>
      )}
    </Flex>
  );
};

export default PrizePicksDashboard;
