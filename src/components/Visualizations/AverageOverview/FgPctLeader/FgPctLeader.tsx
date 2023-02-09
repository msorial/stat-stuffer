import { Divider } from '@mantine/core';
import { useSelector } from 'react-redux';
import {
  PlayerProps,
  selectPlayers,
} from '../../../../app/reducers/playerSlice';
import { SmallTeamLogos } from '../../../../lib/constants/SmallTeamLogos';
import { TeamLogos } from '../../../../lib/constants/TeamLogos';
import fgPctLeaderFormatter from '../../../../lib/formatters/fgPctLeaderFormatter';
import AverageCard from '../../../Reusable/AverageCard';
import StandingsRow from '../../../Reusable/StandingsRow/StandingsRow';

const FgPctLeader: React.FC = () => {
  const pickPlayers: PlayerProps[] = useSelector(selectPlayers);
  const sortedFgPctArray = fgPctLeaderFormatter(pickPlayers);

  return (
    <AverageCard
      title="FG% Leader"
      playerName={sortedFgPctArray[0].playerName}
      teamLogo={TeamLogos[sortedFgPctArray[0].teamId - 1].logo}
      statValue={sortedFgPctArray[0].fgPct}
      statCategory="FG%"
      season={sortedFgPctArray[0].season}
      standings={sortedFgPctArray.slice(1).map((player, index) => {
        return (
          <div key={player.playerName}>
            <StandingsRow
              playerName={player.playerName}
              teamLogo={SmallTeamLogos[player.teamId - 1].logo}
              statValue={player.fgPct}
              statCategory="FG%"
              season={player.season}
              ranking={index + 2}
            />

            {index !== sortedFgPctArray.length - 2 && <Divider />}
          </div>
        );
      })}
    />
  );
};

export default FgPctLeader;
