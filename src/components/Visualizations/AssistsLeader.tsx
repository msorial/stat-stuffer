import React, { useState, useEffect, useMemo } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import { RiseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectPlayers } from '../../app/reducers/playerSlice';
import { TeamLogos, TeamLogosProps } from '../../lib/constants/TeamLogos';
import MetricCard from '../Dashboard/MetricCard/MetricCard';

const AssistsLeader: React.FC = () => {
  const playerArray = useSelector(selectPlayers); // * Redux Player Array

  const [astLeader, setAstLeader] = useState<string>('Add Players');
  const [maxAst, setMaxAst] = useState<number>(0);
  const [maxSzn, setMaxSzn] = useState<number | string>('to see stats');
  const [teamIndex, setTeamIndex] = useState<number>(0);
  const [diffString, setDiffString] = useState<string>('');

  // * Sorted Player Array by Assists
  const sortedPlayerArray = useMemo(
    () => playerArray.slice().sort((a, b) => b.ast - a.ast),
    [playerArray]
  );

  // TODO: Needs refactoring
  useEffect(() => {
    if (sortedPlayerArray.length > 0) {
      setAstLeader(
        `${sortedPlayerArray[0].firstName} ${sortedPlayerArray[0].lastName}`
      );
      setMaxAst(sortedPlayerArray[0].ast);
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
          sortedPlayerArray[0].ast - sortedPlayerArray[1].ast
        ).toFixed(1);

        setDiffString(
          `${astLeader} averaged ${avgDiff} more APG than ${sortedPlayerArray[1].firstName} ${sortedPlayerArray[1].lastName}`
        );
      }

      if (sortedPlayerArray.length === 1) {
        setDiffString('');
      }
    } else {
      setAstLeader('Add Players');
      setMaxSzn('to see stats');
      setDiffString('');
    }
  }, [astLeader, sortedPlayerArray]);

  return (
    <MetricCard
      title="Assists Leader"
      team={
        sortedPlayerArray.length > 0 ? (
          TeamLogos[teamIndex].logo
        ) : (
          <RiseOutlined />
        )
      }
      player={astLeader}
      stat={
        sortedPlayerArray.length > 0 ? (
          <>
            <span style={{ fontSize: '32px', paddingRight: '5px' }}>
              {maxAst}
            </span>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              APG
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

export default AssistsLeader;
