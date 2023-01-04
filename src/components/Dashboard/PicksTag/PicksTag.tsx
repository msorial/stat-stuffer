import { CloseOutlined } from '@ant-design/icons';
import { Badge, Text } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteStats,
  PickerProps,
  selectPlayerStats,
} from '../../../app/reducers/pickerSlice';
import { TeamColors, TeamColorsProps } from '../../../lib/constants/TeamColors';
import { TeamLogos, TeamLogosProps } from '../../../lib/constants/TeamLogos';

const PicksTag: React.FC = () => {
  const dispatch = useDispatch();
  const pickPlayerGames: PickerProps[] = useSelector(selectPlayerStats);

  if (pickPlayerGames.length > 0) {
    const colorIndex = TeamColors.findIndex(
      (color: TeamColorsProps) =>
        color.team ===
        (pickPlayerGames[0].team.abbreviation
          ? pickPlayerGames[0].team.abbreviation
          : 'undefined')
    );

    const teamIndex = TeamLogos.findIndex(
      (logo: TeamLogosProps) =>
        logo.team ===
        (pickPlayerGames[0].team.abbreviation
          ? pickPlayerGames[0].team.abbreviation
          : 'undefined')
    );

    return (
      <Badge
        key={pickPlayerGames[0].player.id}
        variant="filled"
        leftSection={TeamLogos[teamIndex].logo}
        rightSection={<CloseOutlined onClick={() => dispatch(deleteStats())} />}
        sx={{
          backgroundColor: `${TeamColors[colorIndex].primaryColor}80`,
          color: `${TeamColors[colorIndex].secondaryColor}`,
          borderColor: `${TeamColors[colorIndex].primaryColor}`,
        }}
      >
        <Text
          sx={{ fontSize: '11px' }}
        >{`${pickPlayerGames[0].player.first_name} ${pickPlayerGames[0].player.last_name}`}</Text>
      </Badge>
    );
  } else return <></>;
};

export default PicksTag;
