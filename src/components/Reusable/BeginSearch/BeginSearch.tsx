import { Flex, Text, Title } from '@mantine/core';

const BeginSearch: React.FC = () => {
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
        Search for Prop
      </Title>
    </Flex>
  );
};

export default BeginSearch;
