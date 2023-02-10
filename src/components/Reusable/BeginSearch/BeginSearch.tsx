import { TrophyOutlined } from '@ant-design/icons';
import { Button, Flex, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface BeginSearchProps {
  title: string;
  dashboard?: 'average-overview' | 'parlay-picker' | 'ai-picks';
}

const BeginSearch: React.FC<BeginSearchProps> = ({ title, dashboard }) => {
  const navigate = useNavigate();

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

      {dashboard === 'parlay-picker' && (
        <Button
          variant="outline"
          color="red"
          leftIcon={<TrophyOutlined />}
          sx={{ padding: '0px 40px' }}
          onClick={() => navigate('/ai-picks')}
        >
          AI Picks
        </Button>
      )}
    </Flex>
  );
};

export default BeginSearch;
