import React, { useState, useEffect, useMemo } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import { RiseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectPlayers } from '../../app/reducers/playerSlice';
import { TeamLogos, TeamLogosProps } from '../../lib/constants/TeamLogos';
import MetricCard from '../Dashboard/MetricCard/MetricCard';

const ReboundsLeader: React.FC = () => {
  const playerArray = useSelector(selectPlayers); // * Redux Player Array

  const [rebLeader, setRebLeader] = useState<string>('Add Players');
  const [maxReb, setMaxReb] = useState<number>(0);
  const [maxSzn, setMaxSzn] = useState<number | string>('to see stats');
  const [teamIndex, setTeamIndex] = useState<number>(0);
  const [diffString, setDiffString] = useState<string>('');

  // * Sorted Player Array by Rebounds
  const sortedPlayerArray = useMemo(
    () => playerArray.slice().sort((a, b) => b.reb - a.reb),
    [playerArray]
  );

  // TODO: Needs refactoring
  useEffect(() => {
    if (sortedPlayerArray.length > 0) {
      setRebLeader(
        `${sortedPlayerArray[0].firstName} ${sortedPlayerArray[0].lastName}`
      );
      setMaxReb(sortedPlayerArray[0].reb);
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
          sortedPlayerArray[0].reb - sortedPlayerArray[1].reb
        ).toFixed(1);

        setDiffString(
          `${rebLeader} averaged ${avgDiff} more RPG than ${sortedPlayerArray[1].firstName} ${sortedPlayerArray[1].lastName}`
        );
      }

      if (sortedPlayerArray.length === 1) {
        setDiffString('');
      }
    } else {
      setRebLeader('Add Players');
      setMaxSzn('to see stats');
      setDiffString('');
    }
  }, [rebLeader, sortedPlayerArray]);

  return (
    <MetricCard
      title="Rebounds Leader"
      team={
        sortedPlayerArray.length > 0 ? (
          TeamLogos[teamIndex].logo
        ) : (
          <RiseOutlined />
        )
      }
      player={rebLeader}
      stat={
        sortedPlayerArray.length > 0 ? (
          <>
            <span style={{ fontSize: '32px', paddingRight: '5px' }}>
              {maxReb}
            </span>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              RPG
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

export default ReboundsLeader;
