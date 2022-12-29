import React, { useState, useEffect, useMemo } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import { RiseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectPlayers } from '../../app/reducers/playerSlice';
import { TeamLogos, TeamLogosProps } from '../../lib/constants/TeamLogos';
import MetricCard from '../Reusable/MetricCard/MetricCard';

const PointsLeader: React.FC = () => {
  const playerArray = useSelector(selectPlayers); // * Redux Player Array

  // turn all this card information into a state object instead of a bunch
  // of useStates
  const [ptsLeader, setPtsLeader] = useState<string>('Add Players');
  const [maxPts, setMaxPts] = useState<number>(0);
  const [maxSzn, setMaxSzn] = useState<number | string>('to see stats');
  const [teamIndex, setTeamIndex] = useState<number>(0);
  const [diffString, setDiffString] = useState<string>('');

  // * Sorted Player Array by Points
  const sortedPlayerArray = useMemo(
    () => playerArray.slice().sort((a, b) => b.pts - a.pts),
    [playerArray]
  );

  // TODO: Needs refactoring
  useEffect(() => {
    if (sortedPlayerArray.length > 0) {
      setPtsLeader(
        `${sortedPlayerArray[0].firstName} ${sortedPlayerArray[0].lastName}`
      );
      setMaxPts(sortedPlayerArray[0].pts);
      setMaxSzn(sortedPlayerArray[0].season);
      setTeamIndex(
        TeamLogos.findIndex(
          (team: TeamLogosProps) =>
            team.team ===
            (sortedPlayerArray[0].team
              ? sortedPlayerArray[0].team
              : 'undefined')
        )
      );

      if (sortedPlayerArray.length >= 2) {
        const avgDiff = Number(
          sortedPlayerArray[0].pts - sortedPlayerArray[1].pts
        ).toFixed(1);

        setDiffString(
          `${ptsLeader} averaged ${avgDiff} more PPG than ${sortedPlayerArray[1].firstName} ${sortedPlayerArray[1].lastName}`
        );
      }

      if (sortedPlayerArray.length === 1) {
        setDiffString('');
      }
    } else {
      setPtsLeader('Add Players');
      setMaxSzn('to see stats');
      setDiffString('');
    }
  }, [ptsLeader, sortedPlayerArray]);

  return (
    <MetricCard
      title="Points Leader"
      teamLogo={
        sortedPlayerArray.length > 0 ? (
          TeamLogos[teamIndex].logo
        ) : (
          <RiseOutlined />
        )
      }
      playerName={ptsLeader}
      statistic={
        sortedPlayerArray.length > 0 ? (
          <>
            <span style={{ fontSize: '32px', paddingRight: '5px' }}>
              {maxPts}
            </span>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              PPG
            </span>
          </>
        ) : (
          <UserAddOutlined />
        )
      }
      season={maxSzn}
      extra={
        <span
          style={{
            display: diffString === '' ? 'none' : 'block ',
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          {diffString}
        </span>
      }
    />
  );
};

export default PointsLeader;
