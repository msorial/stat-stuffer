import { PlayerProps } from '../../app/reducers/playerSlice';

interface AssistsLeaderFormatterProps {
  teamId: number;
  assists: number;
  playerName: string;
  season: number;
}

const assistsLeaderFormatter = (
  players: PlayerProps[]
): AssistsLeaderFormatterProps[] => {
  const tempArray: AssistsLeaderFormatterProps[] = [];

  players.map((player) => {
    tempArray.push({
      teamId: player.teamId,
      assists: player.ast,
      playerName: `${player.firstName} ${player.lastName}`,
      season: player.season,
    });
  });

  tempArray.sort((a, b) => b.assists - a.assists);

  return tempArray;
};

export default assistsLeaderFormatter;
