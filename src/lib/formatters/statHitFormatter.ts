import { BetProps, PickerProps } from '../../app/reducers/pickerSlice';

interface StatHitFormatterProps {
  percentHit: number;
  statHitCount: number;
  totalGamePlayedCount: number;
}

const statHitFormatter = (
  gameStats: PickerProps[],
  betDetails: BetProps
): StatHitFormatterProps => {
  let statHitCount = 0;
  let totalGamePlayedCount = 0;

  for (const game of gameStats) {
    if (game.min !== '00') {
      totalGamePlayedCount++;
    }

    if (betDetails.betCategory === 'Points') {
      if (game.pts > betDetails.betValue) {
        statHitCount++;
      }
    } else if (betDetails.betCategory === 'Assists') {
      if (game.ast > betDetails.betValue) {
        statHitCount++;
      }
    } else if (betDetails.betCategory === 'Rebounds') {
      if (game.reb > betDetails.betValue) {
        statHitCount++;
      }
    } else if (betDetails.betCategory === 'Pts + Asts + Rebs') {
      if (game.pts + game.ast + game.reb > betDetails.betValue) {
        statHitCount++;
      }
    }
  }

  return {
    percentHit: parseFloat(
      ((statHitCount / totalGamePlayedCount) * 100).toFixed(1)
    ),
    statHitCount: statHitCount,
    totalGamePlayedCount: totalGamePlayedCount,
  };
};

export default statHitFormatter;
