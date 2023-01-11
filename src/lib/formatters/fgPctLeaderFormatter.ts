import { PlayerProps } from '../../app/reducers/playerSlice';

interface FGLeaderFormatterProps {
  teamId: number;
  fgPct: number;
  playerName: string;
  season: number;
}

const fgPctLeaderFormatter = (
  players: PlayerProps[]
): FGLeaderFormatterProps[] => {
  const tempArray: FGLeaderFormatterProps[] = [];

  players.map((player) => {
    tempArray.push({
      teamId: player.teamId,
      fgPct: Number((player.fg_pct * 100).toFixed(1)),
      playerName: `${player.firstName} ${player.lastName}`,
      season: player.season,
    });
  });

  tempArray.sort((a, b) => b.fgPct - a.fgPct);

  return tempArray;
};

export default fgPctLeaderFormatter;
