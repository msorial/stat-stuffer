import { useSelector } from 'react-redux';
import {
  BetProps,
  PickerProps,
  selectBetDetails,
  selectPlayerStats,
} from '../../../../app/reducers/pickerSlice';
import statHitStreakFormatter from '../../../../lib/formatters/statHitStreakFormatter';
import PicksCard from '../../../Reusable/PicksCard';

const HitStreak: React.FC = () => {
  const pickPlayerGames: PickerProps[] = useSelector(selectPlayerStats);
  const betDetails: BetProps = useSelector(selectBetDetails);

  return (
    <PicksCard
      type="streak"
      title="Streak"
      subtitle={`${statHitStreakFormatter(pickPlayerGames, betDetails)}`}
      percent={1}
      color="red"
    />
  );
};

export default HitStreak;
