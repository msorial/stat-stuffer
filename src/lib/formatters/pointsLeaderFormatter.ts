import { PlayerProps } from '../../app/reducers/playerSlice';

interface PointsLeaderFormatterProps {
  teamId: number;
  points: number;
  playerName: string;
  season: number;
}

const pointsLeaderFormatter = (
  players: PlayerProps[]
): PointsLeaderFormatterProps[] => {
  const tempArray: PointsLeaderFormatterProps[] = [];

  players.map((player) => {
    tempArray.push({
      teamId: player.teamId,
      points: player.pts,
      playerName: `${player.firstName} ${player.lastName}`,
      season: player.season,
    });
  });

  tempArray.sort((a, b) => b.points - a.points);

  return tempArray;
};

export default pointsLeaderFormatter;
