import HitPercent from './HitPercent';
import HitPercentVsTeam from './HitPercentVsTeam';

export const ParlayPickerVisualizations = [
  {
    key: 'hit-percent',
    viz: <HitPercent />,
  },
  {
    key: 'hit-percent-vs-team',
    viz: <HitPercentVsTeam />,
  },
];
