import { ReactElement } from 'react';
import { Group, Flex, Text, Divider } from '@mantine/core';

interface StandingsRowProps {
  stat: string;
  diff: number;
  player: string;
  logo: ReactElement;
}

const StandingsRow: React.FC<StandingsRowProps> = ({
  stat,
  diff,
  player,
  logo,
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
          {stat}
        </Text>

        <Text
          color="dimmed"
          size="xs"
          transform="uppercase"
          weight={700}
          c="blue"
        >
          +{diff}
        </Text>

        <Group spacing={5}>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {player}
          </Text>
          {logo}
        </Group>
      </Flex>
      <Divider />
    </>
  );
};

export default StandingsRow;
