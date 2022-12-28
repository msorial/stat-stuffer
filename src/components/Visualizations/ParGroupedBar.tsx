import React, { useEffect, useMemo, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { useSelector } from 'react-redux';
import { selectPlayers } from '../../app/reducers/playerSlice';
import VizCard from '../Dashboard/VizCard';

const data = [
  {
    Player: 'Lebron James',
    Points: 26,
    Assists: 7,
    Rebounds: 9,
  },
  {
    Player: 'Kevin Durant',
    Points: 22,
    Assists: 3,
    Rebounds: 11,
  },
  {
    Player: 'Luka F',
    Points: 29,
    Assists: 10,
    Rebounds: 10,
  },
  {
    Player: 'Luka E',
    Points: 29,
    Assists: 10,
    Rebounds: 10,
  },
  {
    Player: 'Luka FG',
    Points: 29,
    Assists: 10,
    Rebounds: 10,
  },
];

interface BarProps {
  Player: string;
  Points: number;
  Assists: number;
  Rebounds: number;
}

const ParGroupedBar: React.FC = () => {
  const [tempBarData, setTempBarData] = useState<any>([]);

  // const statsMap = new Map();

  const playerArray = useSelector(selectPlayers); // * Redux Player Array

  const sortedPlayerArray = useMemo(
    () => playerArray.slice().sort((a, b) => b.pts - a.pts),
    [playerArray]
  );

  useEffect(() => {
    if (playerArray.length > 0) {
      setTempBarData((oldArray: any) => [
        ...oldArray,
        {
          Player: playerArray[playerArray.length - 1].firstName,
          Points: playerArray[playerArray.length - 1].pts,
          Assists: playerArray[playerArray.length - 1].ast,
          Rebounds: playerArray[playerArray.length - 1].reb,
        },
      ]);

      // tempBarData.push({
      //   Player: playerArray[playerArray.length - 1].firstName,
      //   Points: playerArray[playerArray.length - 1].pts,
      //   Assists: playerArray[playerArray.length - 1].ast,
      //   Rebounds: playerArray[playerArray.length - 1].reb,
      // });
    }

    // console.log(playerArray.length);
    // console.log(tempBarData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerArray]);

  // console.log(tempBarData);

  return (
    <VizCard
      title="All Stats"
      bordered={false}
      children={
        <ResponsiveBar
          data={tempBarData}
          keys={['Points', 'Assists', 'Rebounds']}
          indexBy="Player"
          margin={{ top: 50, right: 60, bottom: 50, left: 70 }}
          padding={0.3}
          colors={{ scheme: 'pastel2' }}
          // axisBottom={{
          //   tickSize: 5,
          //   tickPadding: 5,
          //   tickRotation: 0,
          //   legend: 'Player',
          //   legendPosition: 'middle',
          //   legendOffset: 32,
          // }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Stats',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
          }}
        />
      }
    />
  );
};

export default ParGroupedBar;
