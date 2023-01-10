import { ReactElement } from 'react';
import {
  Paper,
  Flex,
  Text,
  Title,
  Stack,
  Divider,
  ScrollArea,
} from '@mantine/core';
import { useSelector } from 'react-redux';
import { selectPlayers } from '../../../app/reducers/playerSlice';
import { SmallTeamLogos } from '../../../lib/constants/SmallTeamLogos';
import { TeamLogos } from '../../../lib/constants/TeamLogos';
import StandingsRow from '../StandingsRow/StandingsRow';

interface AverageCardProps {
  title: string;
  logo: ReactElement;
  statValue: number;
  statCategory: string;
  playerName: string;
  season: number;
}

const AverageCard: React.FC<AverageCardProps> = ({
  title,
  logo,
  statValue,
  statCategory,
  playerName,
  season,
}) => {
  const playerArray = useSelector(selectPlayers);

  return (
    <Paper withBorder radius="md" sx={{ height: '100%' }}>
      <Flex direction="column" justify="space-evenly" sx={{ height: '100%' }}>
        <Flex
          gap="md"
          justify="space-between"
          align="center"
          direction="row"
          wrap="nowrap"
          sx={{ padding: '15px 20px' }}
        >
          <Text color="dimmed" size="sm" transform="uppercase" weight={700}>
            {title}
          </Text>

          {logo}
        </Flex>

        <Flex
          gap="md"
          justify="space-between"
          align="center"
          direction="row"
          wrap="nowrap"
          sx={{ padding: '20px 20px 30px' }}
        >
          <Title weight={700} size="xl">
            {statValue}
            <Text span size="sm" color="dimmed">
              {' '}
              {statCategory}
            </Text>
          </Title>

          <Stack align="flex-end" spacing={0}>
            <Text size="sm" transform="uppercase" weight={700}>
              {playerName}
            </Text>
            <Title weight={700} size="xs" color="dimmed">
              {season}
            </Title>
          </Stack>
        </Flex>

        {playerArray.length > 0 && (
          <>
            <Divider />
            <ScrollArea
              style={{ height: 70 }}
              scrollbarSize={4}
              scrollHideDelay={500}
            >
              <StandingsRow
                stat="27.7 PPG"
                diff={3.4}
                player="Luka Doncic - 2019"
                logo={SmallTeamLogos[27].logo}
              />
              <StandingsRow
                stat="27.7 PPG"
                diff={3.4}
                player="Luka Doncic - 2019"
                logo={SmallTeamLogos[21].logo}
              />
              <StandingsRow
                stat="27.7 PPG"
                diff={3.4}
                player="Luka Doncic - 2019"
                logo={SmallTeamLogos[9].logo}
              />
            </ScrollArea>
          </>
        )}
      </Flex>
    </Paper>
  );
};

export default AverageCard;
