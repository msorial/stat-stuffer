import { useSelector } from 'react-redux';
import {
  BetProps,
  PickerProps,
  selectBetDetails,
  selectPlayerStats,
} from '../../../../app/reducers/pickerSlice';
import {
  TeamColors,
  TeamColorsProps,
} from '../../../../lib/constants/TeamColors';
import statHitFormatter from '../../../../lib/formatters/statHitFormatter';
import PicksCard from '../../../Reusable/PicksCard';

const HitPercent: React.FC = () => {
  const pickPlayerGames: PickerProps[] = useSelector(selectPlayerStats);
  const betDetails: BetProps = useSelector(selectBetDetails);

  const colorIndex = TeamColors.findIndex(
    (color: TeamColorsProps) =>
      color.team ===
      (pickPlayerGames[0].team.abbreviation
        ? pickPlayerGames[0].team.abbreviation
        : 'undefined')
  );

  return (
    <PicksCard
      type="percent"
      percent={statHitFormatter(pickPlayerGames, betDetails).percentHit}
      title="Hit Rate"
      subtitle={`${
        statHitFormatter(pickPlayerGames, betDetails).statHitCount
      }/${statHitFormatter(pickPlayerGames, betDetails).totalGamePlayedCount}`}
      color={`${TeamColors[colorIndex].primaryColor}`}
    />
  );
};

export default HitPercent;
