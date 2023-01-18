import { Flex, Text, Title } from '@mantine/core';

interface BeginSearchProps {
  title: string;
}

const BeginSearch: React.FC<BeginSearchProps> = ({ title }) => {
  return (
    <Flex
      gap="sm"
      justify="center"
      align="center"
      direction="column"
      wrap="nowrap"
      sx={{ height: '100%', textAlign: 'center' }}
    >
      <Text size={42}>🔎</Text>
      <Title size={32} weight={700} color="dimmed">
        {title}
      </Title>
    </Flex>
  );
};

export default BeginSearch;
