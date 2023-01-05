import React from 'react';
import {
  Center,
  Flex,
  Grid,
  Group,
  Paper,
  RingProgress,
  Skeleton,
  Text,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import {
  BetProps,
  PickerProps,
  selectPlayerStats,
  selectBetDetails,
} from '../../app/reducers/pickerSlice';
import PageHeader from '../../components/Dashboard/PageHeader/PageHeader';
import PicksSearch from '../../components/Dashboard/PicksSearch';
import PicksTag from '../../components/Dashboard/PicksTag';
import statHitFormatter from '../../lib/formatters/statHitFormatter';
import statHitVsTeamFormatter from '../../lib/formatters/statHitVsTeamFormatter';

const PrizePicksDashboard: React.FC = () => {
  const pickPlayerGames: PickerProps[] = useSelector(selectPlayerStats);
  const betDetails: BetProps = useSelector(selectBetDetails);

  const card = (
    <Paper withBorder radius="md" p="xs" key={'t'}>
      <Group>
        <RingProgress
          sections={[{ value: 40, color: 'blue' }]}
          label={
            <Text color="blue" weight={700} align="center" size="xl">
              40%
            </Text>
          }
        />

        <div>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {
              statHitVsTeamFormatter(pickPlayerGames, betDetails)
                .percentHitVsTeam
            }
          </Text>
          <Text weight={700} size="xl">
            10/25 Games
          </Text>
        </div>
      </Group>
    </Paper>
  );

  return (
    <Flex
      // align="stretch"
      // justify="initial"
      direction="column"
      gap="lg"
      // sx={{ height: '100%' }}
    >
      <PageHeader
        pageTitle={'Prize Picker'}
        search={<PicksSearch />}
        dashboard="prize-picker"
        prizePicksPlayer={<PicksTag />}
      />

      {/* <Center sx={{ height: '100%', width: '100%' }}> */}
      {/* <Stack justify="center" align="center">
          <Loader size="lg" variant="dots" color="red" />
          <Text
            variant="gradient"
            gradient={{ from: '#ff8a00', to: '#da1b60', deg: 45 }}
            sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
            size="xl"
            weight={700}
          >
            {statHitFormatter(pickPlayerGames, propDetails).statHitCount}
          </Text>
        </Stack> */}

      <Grid grow gutter="md" sx={{ height: '100%' }}>
        <Grid.Col span={4}>{card}</Grid.Col>
        <Grid.Col span={4}>{card} </Grid.Col>
        <Grid.Col span={4}>{card} </Grid.Col>
        <Grid.Col span={12}>{card} </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default PrizePicksDashboard;
