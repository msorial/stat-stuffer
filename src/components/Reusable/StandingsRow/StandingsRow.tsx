import { ReactElement } from 'react';
import { Group, Flex, Text } from '@mantine/core';

interface StandingsRowProps {
  playerName: string;
  teamLogo: ReactElement;
  statValue: number;
  statCategory: string;
  season: number;
  ranking: number;
}

const StandingsRow: React.FC<StandingsRowProps> = ({
  playerName,
  teamLogo,
  statValue,
  statCategory,
  season,
  ranking,
}) => {
  return (
    <>
      <Flex
        gap="md"
        justify="space-between"
        align="center"
        direction="row"
        wrap="nowrap"
        sx={{ padding: '5px 10px' }}
      >
        <Text color="#000" size="xs" transform="uppercase" weight={700}>
          <Text span c="dimmed" sx={{ paddingRight: '5px' }}>
            {ranking}.
          </Text>
          {statValue} {statCategory}
        </Text>

        <Group spacing={5}>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            <Text span c="#000">
              {playerName}
            </Text>{' '}
            - {season}
          </Text>
          {teamLogo}
        </Group>
      </Flex>
    </>
  );
};

export default StandingsRow;
