import { BetProps, PickerProps } from '../../app/reducers/pickerSlice';

const statHitStreakFormatter = (
  gameStats: PickerProps[],
  betDetails: BetProps
): number => {
  let streak = 0;

  for (let i = 0; i < gameStats.length; i++) {
    const game = gameStats[i];

    if (betDetails.betCategory === 'Points') {
      if (game.pts > betDetails.betValue) {
        streak++;
      } else {
        break;
      }
    } else if (betDetails.betCategory === 'Assists') {
      if (game.ast > betDetails.betValue) {
        streak++;
      } else {
        break;
      }
    }
    if (betDetails.betCategory === 'Rebounds') {
      if (game.reb > betDetails.betValue) {
        streak++;
      } else {
        break;
      }
    }
    if (betDetails.betCategory === 'Pts + Asts + Rebs') {
      if (game.pts + game.ast + game.reb > betDetails.betValue) {
        streak++;
      } else {
        break;
      }
    }
  }

  return streak;
};

export default statHitStreakFormatter;
