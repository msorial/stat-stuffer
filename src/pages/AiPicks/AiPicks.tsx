import { useEffect, useState } from 'react';
import { Flex, Kbd, Mark, Stack, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../../app/reducers/uiSlice';
import PageHeader from '../../components/Dashboard/PageHeader';

interface PrizePickAPIProps {
  betCategory: string;
  betValue: string; // TODO: change in scraper
  date: string;
  opposingTeam: string;
  playerName: string;
}

const AiPicks: React.FC = () => {
  const darkMode: boolean = useSelector(selectColorTheme);
  const [availableProps, setAvailableProps] = useState<PrizePickAPIProps[]>([]);

  useEffect(() => {
    fetch('https://stat-stuffer-default-rtdb.firebaseio.com/props.json')
      .then((response) => response.json())
      .then((data) => setAvailableProps(data));
  }, []);

  return (
    <Flex align="stretch" direction="column" gap="lg" sx={{ height: '100%' }}>
      <PageHeader
        pageTitle={'AI Picks'}
        search={
          <Stack align="center" spacing={2}>
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
            <Kbd>
              <Mark color="red" sx={{ padding: '1px' }}>
                {availableProps.length} Props Available
              </Mark>
            </Kbd>
          </Stack>
        }
        dashboard="ai-picks"
      />

      {availableProps.map((prop: PrizePickAPIProps) => {
        return <div>{prop.playerName}</div>;
      })}
    </Flex>
  );
};

export default AiPicks;
