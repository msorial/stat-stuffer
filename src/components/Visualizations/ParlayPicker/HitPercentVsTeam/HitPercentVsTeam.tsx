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
import statHitVsTeamFormatter from '../../../../lib/formatters/statHitVsTeamFormatter';
import PicksCard from '../../../Reusable/PicksCard';

const HitPercentVsTeam: React.FC = () => {
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
      percent={
        statHitVsTeamFormatter(pickPlayerGames, betDetails).percentHitVsTeam
      }
      title={`Hit Rate Versus ${betDetails.opposingTeam?.name}`}
      subtitle={`${
        statHitVsTeamFormatter(pickPlayerGames, betDetails).statHitVsTeamCount
      }/${
        statHitVsTeamFormatter(pickPlayerGames, betDetails)
          .totalGamePlayedVsTeamCount
      }`}
      color={
        TeamColors[colorIndex].secondaryColor === '#f0f0f0'
          ? TeamColors[colorIndex].primaryColor
          : TeamColors[colorIndex].secondaryColor
      }
    />
  );
};

export default HitPercentVsTeam;
