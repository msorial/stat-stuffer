import { useEffect, useState } from 'react';
import {
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  Kbd,
  Mark,
  Paper,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowsSort } from '@tabler/icons';
import PageHeader from '../../components/Dashboard/PageHeader';
import { TeamColors, TeamColorsProps } from '../../lib/constants/TeamColors';
import { TeamLogos } from '../../lib/constants/TeamLogos';

interface PropsInterface {
  playerName: string;
  playerTeam: string;
  opposingTeam: string;
  betCategory: string;
  betValue: number;
  date: string;
  odds: OddsInterface;
}

interface OddsInterface {
  aiOdds: number;
  hitRate: number;
  teamHitRate: number;
  streak: number;
}

interface PrizePickAPIInterface {
  [key: string]: PropsInterface[];
}

const AiPicks: React.FC = () => {
  const isSmall = useMediaQuery('(max-width: 950px)');
  const [availableProps, setAvailableProps] = useState<PropsInterface[]>([]);
  const [sortBy, setSortBy] = useState<string | undefined>('AI Odds');
  const formattedLastHour = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    new Date().getHours(),
    0,
    0,
    0
  ).toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  useEffect(() => {
    fetch('https://stat-stuffer-default-rtdb.firebaseio.com/props.json')
      .then((response) => response.json())
      .then((data: PrizePickAPIInterface) => {
        setAvailableProps(
          Object.values(data)
            .flatMap((arr: PropsInterface[]) =>
              arr.map((item: PropsInterface) => item)
            )
            .sort((a: PropsInterface, b: PropsInterface) => {
              if (sortBy === 'AI Odds') {
                return b.odds.aiOdds - a.odds.aiOdds;
              } else if (sortBy === 'Hit Rate') {
                return b.odds.hitRate - a.odds.hitRate;
              } else if (sortBy === 'Team Hit Rate') {
                return b.odds.teamHitRate - a.odds.teamHitRate;
              } else {
                return b.odds.streak - a.odds.streak;
              }
            })
        );
      });
  }, [sortBy]);

  return (
    <Flex align="stretch" direction="column" gap="lg" sx={{ height: '100%' }}>
      <PageHeader
        pageTitle={'AI Picks'}
        search={
          <Kbd>
            Last Updated:{' '}
            <Mark color="red" sx={{ padding: '1px 5px' }}>
              {formattedLastHour}
            </Mark>
          </Kbd>
        }
        dashboard="ai-picks"
      />

      <Flex
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
        sx={{ padding: '10px 5px 0px' }}
      >
        <Text color="dimmed" size="md" transform="uppercase">
          {availableProps.length} Props Available
        </Text>

        <Select
          placeholder="Sort By"
          searchable
          nothingFound="No Options"
          icon={<IconArrowsSort size="1rem" />}
          value={sortBy}
          onChange={(option: string) => setSortBy(option)}
          data={['AI Odds', 'Hit Rate', 'Team Hit Rate', 'Streak']}
        />
      </Flex>

      <Paper withBorder radius="md">
        {availableProps.map((prop: PropsInterface, index) => {
          const teamLogo = TeamLogos.find(
            (logo) => logo.team === prop.playerTeam
          )?.logo;
          const oppTeamLogo = TeamLogos.find(
            (logo) => logo.team === prop.opposingTeam
          )?.logo;
          const colorIndex = TeamColors.findIndex(
            (color: TeamColorsProps) =>
              color.team === (prop.playerTeam ? prop.playerTeam : 'undefined')
          );

          return (
            <div key={`${prop.playerName}-${prop.betCategory}`}>
              <Box
                sx={{
                  padding: '20px',
                  margin: '5px',
                }}
              >
                <Flex
                  justify={isSmall ? 'center' : 'space-between'}
                  align="center"
                  direction={isSmall ? 'column' : 'row'}
                  wrap="wrap"
                  gap="xl"
                >
                  <Flex gap={50} direction="row" wrap="nowrap">
                    <Stack align="center" spacing="xs">
                      <Text color="dimmed" size="xs" transform="uppercase">
                        Player
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Badge
                          variant="filled"
                          leftSection={teamLogo}
                          sx={{
                            backgroundColor: `${TeamColors[colorIndex].primaryColor}80`,
                            color: `${TeamColors[colorIndex].secondaryColor}`,
                            borderColor: `${TeamColors[colorIndex].primaryColor}`,
                          }}
                        >
                          <Text sx={{ fontSize: '11px' }}>
                            {prop.playerName}
                          </Text>
                        </Badge>
                      </Center>
                    </Stack>

                    <Stack align="center" spacing="xs">
                      <Text color="dimmed" size="xs" transform="uppercase">
                        Prop
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Stack align="center" spacing={0}>
                          <Title weight={700} size="xl">
                            {prop.betValue}
                          </Title>
                          <Text weight={700} size="sm">
                            {prop.betCategory}
                          </Text>
                        </Stack>
                      </Center>
                    </Stack>

                    <Stack align="center" spacing="xs">
                      <Text color="dimmed" size="xs" transform="uppercase">
                        Opponent
                      </Text>
                      <Center sx={{ height: '100%' }}>{oppTeamLogo}</Center>
                    </Stack>
                  </Flex>

                  <Flex
                    gap="xl"
                    direction="row"
                    wrap="nowrap"
                    sx={{ height: '100%' }}
                  >
                    <Stack align="center" spacing="xs">
                      <Text color="dimmed" size="xs" transform="uppercase">
                        AI
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Title weight={700} size="xl">
                          {prop.odds.aiOdds}
                        </Title>
                      </Center>
                    </Stack>

                    <Stack align="center" spacing="xs">
                      <Text color="dimmed" size="xs" transform="uppercase">
                        Hit Rate
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Title weight={700} size="xl">
                          {prop.odds.hitRate}
                        </Title>
                      </Center>
                    </Stack>

                    <Stack align="center" spacing="xs">
                      <Text color="dimmed" size="xs" transform="uppercase">
                        Team Hit Rate
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Title weight={700} size="xl">
                          {prop.odds.teamHitRate}
                        </Title>
                      </Center>
                    </Stack>

                    <Stack align="center" spacing="xs">
                      <Text
                        color="dimmed"
                        size="xs"
                        transform="uppercase"
                        sx={{ whiteSpace: 'nowrap' }}
                      >
                        Streak
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Title weight={700} size="xl">
                          {prop.odds.streak}
                        </Title>
                      </Center>
                    </Stack>
                  </Flex>
                </Flex>
              </Box>

              {index !== availableProps.length - 1 && <Divider />}
            </div>
          );
        })}
      </Paper>
    </Flex>
  );
};

export default AiPicks;
