import { ReactElement } from 'react';
import { Group, Flex, Text, Divider } from '@mantine/core';

interface StandingsRowProps {
  playerName: string;
  teamLogo: ReactElement;
  statValue: number;
  statCategory: string;
  season: number;
}

const StandingsRow: React.FC<StandingsRowProps> = ({
  playerName,
  teamLogo,
  statValue,
  statCategory,
  season,
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
        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
          {statValue} {statCategory}
        </Text>

        <Group spacing={5}>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {playerName} - {season}
          </Text>
          {teamLogo}
        </Group>
      </Flex>
      <Divider />
    </>
  );
};

export default StandingsRow;
