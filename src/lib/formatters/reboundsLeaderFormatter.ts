import { PlayerProps } from '../../app/reducers/playerSlice';

interface ReboundsLeaderFormatterProps {
  teamId: number;
  rebounds: number;
  playerName: string;
  season: number;
}

const reboundsLeaderFormatter = (
  players: PlayerProps[]
): ReboundsLeaderFormatterProps[] => {
  const tempArray: ReboundsLeaderFormatterProps[] = [];

  players.map((player) => {
    tempArray.push({
      teamId: player.teamId,
      rebounds: player.reb,
      playerName: `${player.firstName} ${player.lastName}`,
      season: player.season,
    });
  });

  tempArray.sort((a, b) => b.rebounds - a.rebounds);

  return tempArray;
};

export default reboundsLeaderFormatter;
