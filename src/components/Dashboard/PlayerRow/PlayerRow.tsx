import React from 'react';
import { Divider, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlayer, selectPlayers } from '../../../app/reducers/playerSlice';
import { TeamColors, TeamColorsProps } from '../../../lib/helpers/TeamColors';

const PlayerRow: React.FC = () => {
  const dispatch = useDispatch();
  const playerArray = useSelector(selectPlayers);

  const handleDeletePlayer = (id: number) => {
    dispatch(deletePlayer(id));
  };

  return (
    <>
      {playerArray?.map((player) => {
        const colorIndex = TeamColors.findIndex(
          (color: TeamColorsProps) =>
            color.team === (player.team ? player.team : 'undefined')
        );

        return (
          <Tag
            key={player.id}
            closable
            onClose={() => handleDeletePlayer(player.id)}
            color={`${TeamColors[colorIndex].primaryColor}80`}
            style={{
              color: `${TeamColors[colorIndex].secondaryColor}`,
              borderColor: `${TeamColors[colorIndex].primaryColor}`,
              fontSize: '14px',
              padding: '2px 7px',
            }}
          >
            {player.firstName} {player.lastName}
            <Divider
              type="vertical"
              style={{
                backgroundColor: `${TeamColors[colorIndex].secondaryColor}`,
                margin: '0px 5px',
              }}
            />
            {player.season}
          </Tag>
        );
      })}
    </>
  );
};

export default PlayerRow;
