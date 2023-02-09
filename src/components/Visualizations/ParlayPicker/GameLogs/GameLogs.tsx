import {
  Box,
  Paper,
  Flex,
  Stack,
  Text,
  Title,
  Center,
  ThemeIcon,
  Divider,
  ScrollArea,
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';
import { useSelector } from 'react-redux';
import {
  BetProps,
  PickerProps,
  selectBetDetails,
  selectPlayerStats,
} from '../../../../app/reducers/pickerSlice';
import { TeamLogos } from '../../../../lib/constants/TeamLogos';

const GameLogs: React.FC = () => {
  const pickPlayerGames: PickerProps[] = useSelector(selectPlayerStats);
  const betDetails: BetProps = useSelector(selectBetDetails);

  return (
    <Paper withBorder radius="md">
      {pickPlayerGames.map((game: PickerProps, index) => {
        const date = new Date(game.game.date);
        let opposingTeamId: number | undefined = undefined;
        let hit = false;

        if (game.team.id === game.game.home_team_id) {
          opposingTeamId = game.game.visitor_team_id;
        } else {
          opposingTeamId = game.game.home_team_id;
        }

        if (betDetails.betCategory === 'Points') {
          if (game.pts > betDetails.betValue) {
            hit = true;
          }
        } else if (betDetails.betCategory === 'Assists') {
          if (game.ast > betDetails.betValue) {
            hit = true;
          }
        } else if (betDetails.betCategory === 'Rebounds') {
          if (game.reb > betDetails.betValue) {
            hit = true;
          }
        } else if (betDetails.betCategory === 'Pts + Asts + Rebs') {
          if (game.pts + game.ast + game.reb > betDetails.betValue) {
            hit = true;
          }
        }

        return (
          <div key={game.id}>
            <Box
              sx={{
                padding: '20px',
                margin: '5px',
              }}
            >
              <Flex
                justify="space-between"
                align="center"
                direction="row"
                wrap="wrap"
                gap="xl"
              >
                <Flex gap="xl" direction="row" wrap="nowrap">
                  <Stack
                    align="center"
                    justify="center"
                    sx={{ marginRight: '30px' }}
                  >
                    <ThemeIcon
                      radius="xl"
                      size="lg"
                      color={hit ? 'green' : 'red'}
                    >
                      {hit ? <IconCheck /> : <IconX />}
                    </ThemeIcon>
                  </Stack>

                  <Stack align="center" spacing="xs">
                    <Text color="dimmed" size="xs" transform="uppercase">
                      Game Date
                    </Text>
                    <Center sx={{ height: '100%' }}>
                      <Title weight={700} size="xl">
                        {date.toLocaleDateString()}
                      </Title>
                    </Center>
                  </Stack>

                  <Stack align="center" spacing="xs">
                    <Text color="dimmed" size="xs" transform="uppercase">
                      Opponent
                    </Text>
                    <div>{TeamLogos[opposingTeamId - 1].logo}</div>
                  </Stack>
                </Flex>

                <ScrollArea
                  scrollbarSize={3}
                  scrollHideDelay={500}
                  sx={{ padding: '10px' }}
                  type="hover"
                >
                  <Flex
                    gap="xl"
                    direction="row"
                    wrap="nowrap"
                    sx={{ height: '100%' }}
                  >
                    <Stack align="center" spacing="xs">
                      <Text color="dimmed" size="xs" transform="uppercase">
                        Points
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Title weight={700} size="xl">
                          {game.pts}
                        </Title>
                      </Center>
                    </Stack>

                    <Stack align="center" spacing="xs">
                      <Text color="dimmed" size="xs" transform="uppercase">
                        Assists
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Title weight={700} size="xl">
                          {game.ast}
                        </Title>
                      </Center>
                    </Stack>

                    <Stack align="center" spacing="xs">
                      <Text color="dimmed" size="xs" transform="uppercase">
                        Rebounds
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Title weight={700} size="xl">
                          {game.reb}
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
                        Pts + Asts + Rebs
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Title weight={700} size="xl">
                          {game.pts + game.ast + game.reb}
                        </Title>
                      </Center>
                    </Stack>

                    <Stack align="center" spacing="xs">
                      <Text color="dimmed" size="xs" transform="uppercase">
                        Minutes
                      </Text>
                      <Center sx={{ height: '100%' }}>
                        <Title weight={700} size="xl">
                          {game.min}
                        </Title>
                      </Center>
                    </Stack>
                  </Flex>
                </ScrollArea>
              </Flex>
            </Box>

            {index !== pickPlayerGames.length - 1 && <Divider />}
          </div>
        );
      })}
    </Paper>
  );
};

export default GameLogs;
