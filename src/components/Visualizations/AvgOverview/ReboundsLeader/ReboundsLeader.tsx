import { Divider } from '@mantine/core';
import { useSelector } from 'react-redux';
import {
  PlayerProps,
  selectPlayers,
} from '../../../../app/reducers/playerSlice';
import { SmallTeamLogos } from '../../../../lib/constants/SmallTeamLogos';
import { TeamLogos } from '../../../../lib/constants/TeamLogos';
import reboundsLeaderFormatter from '../../../../lib/formatters/reboundsLeaderFormatter';
import AverageCard from '../../../Reusable/AverageCard';
import StandingsRow from '../../../Reusable/StandingsRow/StandingsRow';

const ReboundsLeader: React.FC = () => {
  const pickPlayers: PlayerProps[] = useSelector(selectPlayers);
  const sortedRebArray = reboundsLeaderFormatter(pickPlayers);

  return (
    <AverageCard
      title="Rebounds Leader"
      playerName={sortedRebArray[0].playerName}
      teamLogo={TeamLogos[sortedRebArray[0].teamId - 1].logo}
      statValue={sortedRebArray[0].rebounds}
      statCategory="RPG"
      season={sortedRebArray[0].season}
      standings={sortedRebArray.slice(1).map((player, index) => {
        return (
          <div key={player.playerName}>
            <StandingsRow
              playerName={player.playerName}
              teamLogo={SmallTeamLogos[player.teamId - 1].logo}
              statValue={player.rebounds}
              statCategory="RPG"
              season={player.season}
              ranking={index + 2}
            />

            {index !== sortedRebArray.length - 2 ? <Divider /> : ''}
          </div>
        );
      })}
    />
  );
};

export default ReboundsLeader;
