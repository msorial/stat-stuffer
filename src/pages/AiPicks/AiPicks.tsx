import { Flex, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../../app/reducers/uiSlice';
import PageHeader from '../../components/Dashboard/PageHeader';

const AiPicks: React.FC = () => {
  const darkMode: boolean = useSelector(selectColorTheme);

  return (
    <Flex align="stretch" direction="column" gap="lg" sx={{ height: '100%' }}>
      <PageHeader
        pageTitle={'AI Picks'}
        search={
          <Text
            size="sm"
            transform="uppercase"
            color={darkMode ? 'white' : 'black'}
          >
            {new Date().toLocaleDateString('en-us', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        }
        dashboard="ai-picks"
      />
    </Flex>
  );
};

export default AiPicks;
