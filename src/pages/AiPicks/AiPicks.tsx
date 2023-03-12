import { useEffect, useState } from 'react';
import { Flex, Kbd, Mark, Stack, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../../app/reducers/uiSlice';
import PageHeader from '../../components/Dashboard/PageHeader';

interface PropsInterface {
  playerName: string;
  playerTeam: string;
  opposingTeam: string;
  betCategory: string;
  betValue: number;
  date: string;
  odds: OddsInterface;
}

interface OddsInterface {
  aiOdds: number;
  hitRate: number;
  teamHitRate: number;
  streak: number;
}

interface PrizePickAPIInterface {
  pts: PropsInterface;
  rebs: PropsInterface;
  asts: PropsInterface;
  pra: PropsInterface;
}

const AiPicks: React.FC = () => {
  const darkMode: boolean = useSelector(selectColorTheme);
  const [availableProps, setAvailableProps] = useState<PrizePickAPIInterface>();
  let numOfProps = 0;

  // Need to perform all calculations on backend
  useEffect(() => {
    fetch('https://stat-stuffer-default-rtdb.firebaseio.com/props.json')
      .then((response) => response.json())
      .then((data) => setAvailableProps(data));
  }, []);

  for (const key in availableProps) {
    numOfProps += availableProps[key].length;
  }

  useEffect(() => {
    console.log(availableProps);
  }, [availableProps]);

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
              <Mark color="red" sx={{ padding: '1px 5px' }}>
                {numOfProps} Props Available
              </Mark>
            </Kbd>
          </Stack>
        }
        dashboard="ai-picks"
      />

      {/* {availableProps.map((prop: PrizePickAPIProps) => {
      })} */}
    </Flex>
  );
};

export default AiPicks;
