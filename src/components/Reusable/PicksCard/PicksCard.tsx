import {
  MantineColor,
  Group,
  Paper,
  RingProgress,
  Text,
  Box,
  Title,
} from '@mantine/core';

interface PicksCardProps {
  type: 'percent' | 'streak';
  percent: number;
  title: string;
  subtitle: string;
  color: MantineColor;
}

const PicksCard: React.FC<PicksCardProps> = ({
  type,
  percent,
  title,
  subtitle,
  color,
}) => {
  return (
    <Paper withBorder radius="md" p="xs" sx={{ height: '100%' }}>
      <Group noWrap sx={{ height: '100%' }}>
        {type === 'percent' ? (
          <RingProgress
            sections={[{ value: percent, color: color }]}
            label={
              <Text color={color} weight={700} align="center" size={20}>
                {Number.isNaN(percent) ? 0 : percent}%
              </Text>
            }
          />
        ) : (
          <Box sx={{ paddingLeft: '10px' }}>
            <Text size={42}>🔥</Text>
          </Box>
        )}

        <div>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {title}
          </Text>
          <Title weight={700} size="xl">
            {subtitle}

            <Text span size="md">
              {' '}
              Games
            </Text>
          </Title>
        </div>
      </Group>
    </Paper>
  );
};

export default PicksCard;
