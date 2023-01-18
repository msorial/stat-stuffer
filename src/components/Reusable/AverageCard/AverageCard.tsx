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

interface AverageCardProps {
  title: string;
  playerName: string;
  teamLogo: ReactElement;
  statValue: number;
  statCategory: string;
  season: number;
  standings: ReactElement[];
}

const AverageCard: React.FC<AverageCardProps> = ({
  title,
  playerName,
  teamLogo,
  statValue,
  statCategory,
  season,
  standings,
}) => {
  const playerArray = useSelector(selectPlayers);

  return (
    <Paper withBorder radius="md" sx={{ height: '100%' }}>
      <Flex direction="column" justify="center" sx={{ height: '100%' }}>
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

          {teamLogo}
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

        {playerArray.length > 1 && (
          <>
            <Divider />
            <ScrollArea
              style={{ height: 70 }}
              scrollbarSize={4}
              scrollHideDelay={500}
            >
              {standings}
            </ScrollArea>
          </>
        )}
      </Flex>
    </Paper>
  );
};

export default AverageCard;
