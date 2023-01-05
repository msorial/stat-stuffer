import { BetProps, PickerProps } from '../../app/reducers/pickerSlice';

interface StatHitPercentProps {
  percentHitVsTeam: number;
  statHitVsTeamCount: number;
  totalGamePlayedVsTeamCount: number;
}

const statHitVsTeamFormatter = (
  gameStats: PickerProps[],
  betDetails: BetProps
): StatHitPercentProps => {
  let statHitVsTeamCount = 0;
  let totalGamePlayedVsTeamCount = 0;
  let opposingTeam: number | undefined = undefined;

  for (const game of gameStats) {
    if (game.team.id === game.game.home_team_id) {
      opposingTeam = game.game.visitor_team_id;
    } else {
      opposingTeam = game.game.home_team_id;
    }

    if (game.min !== '00' && opposingTeam === betDetails.opposingTeam?.id) {
      totalGamePlayedVsTeamCount++;
    }

    if (betDetails.betCategory === 'Points') {
      if (
        game.pts > betDetails.betValue &&
        opposingTeam === betDetails.opposingTeam?.id
      ) {
        statHitVsTeamCount++;
      }
    } else if (betDetails.betCategory === 'Assists') {
      if (
        game.ast > betDetails.betValue &&
        opposingTeam === betDetails.opposingTeam?.id
      ) {
        statHitVsTeamCount++;
      }
    } else if (betDetails.betCategory === 'Rebounds') {
      if (
        game.reb > betDetails.betValue &&
        opposingTeam === betDetails.opposingTeam?.id
      ) {
        statHitVsTeamCount++;
      }
    } else if (betDetails.betCategory === 'Pts + Asts + Rebs') {
      if (
        game.pts + game.ast + game.reb > betDetails.betValue &&
        opposingTeam === betDetails.opposingTeam?.id
      ) {
        statHitVsTeamCount++;
      }
    }
  }

  return {
    percentHitVsTeam: parseFloat(
      ((statHitVsTeamCount / totalGamePlayedVsTeamCount) * 100).toFixed(1)
    ),
    statHitVsTeamCount: statHitVsTeamCount,
    totalGamePlayedVsTeamCount: totalGamePlayedVsTeamCount,
  };
};

export default statHitVsTeamFormatter;
