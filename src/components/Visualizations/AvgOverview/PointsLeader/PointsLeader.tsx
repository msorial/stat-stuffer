import { Divider } from '@mantine/core';
import { useSelector } from 'react-redux';
import {
  PlayerProps,
  selectPlayers,
} from '../../../../app/reducers/playerSlice';
import { SmallTeamLogos } from '../../../../lib/constants/SmallTeamLogos';
import { TeamLogos } from '../../../../lib/constants/TeamLogos';
import pointsLeaderFormatter from '../../../../lib/formatters/pointsLeaderFormatter';
import AverageCard from '../../../Reusable/AverageCard';
import StandingsRow from '../../../Reusable/StandingsRow/StandingsRow';

const PointsLeader: React.FC = () => {
  const pickPlayers: PlayerProps[] = useSelector(selectPlayers);
  const sortedPtsArray = pointsLeaderFormatter(pickPlayers);

  return (
    <AverageCard
      title="Points Leader"
      playerName={sortedPtsArray[0].playerName}
      teamLogo={TeamLogos[sortedPtsArray[0].teamId - 1].logo}
      statValue={sortedPtsArray[0].points}
      statCategory="PPG"
      season={sortedPtsArray[0].season}
      standings={sortedPtsArray.slice(1).map((player, index) => {
        return (
          <div key={player.playerName}>
            <StandingsRow
              playerName={player.playerName}
              teamLogo={SmallTeamLogos[player.teamId - 1].logo}
              statValue={player.points}
              statCategory="PPG"
              season={player.season}
              ranking={index + 2}
            />

            {index !== sortedPtsArray.length - 2 ? <Divider /> : ''}
          </div>
        );
      })}
    />
  );
};

export default PointsLeader;
