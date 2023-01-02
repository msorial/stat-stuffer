import React from 'react';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  ActionIcon,
  Badge,
  Flex,
  ScrollArea,
  Text,
  Tooltip,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteAllPlayers,
  deletePlayer,
  selectPlayers,
} from '../../../app/reducers/playerSlice';
import { TeamColors, TeamColorsProps } from '../../../lib/constants/TeamColors';
import { TeamLogos, TeamLogosProps } from '../../../lib/constants/TeamLogos';

const PlayerRow: React.FC = () => {
  const dispatch = useDispatch();
  const playerArray = useSelector(selectPlayers);

  const handleDeletePlayer = (id: number) => {
    dispatch(deletePlayer(id));
  };

  if (playerArray.length > 0) {
    return (
      <Flex
        justify="space-between"
        align="center"
        direction="row"
        gap="md"
        sx={{ width: '100%' }}
      >
        <ScrollArea
          scrollbarSize={3}
          scrollHideDelay={500}
          sx={{ padding: '10px' }}
          type="hover"
        >
          <Flex align="center" direction="row" gap="xs">
            {playerArray?.map((player) => {
              const colorIndex = TeamColors.findIndex(
                (color: TeamColorsProps) =>
                  color.team === (player.team ? player.team : 'undefined')
              );

              const teamIndex = TeamLogos.findIndex(
                (logo: TeamLogosProps) =>
                  logo.team === (player.team ? player.team : 'undefined')
              );

              return (
                <Badge
                  key={player.id}
                  variant="filled"
                  leftSection={TeamLogos[teamIndex].logo}
                  rightSection={
                    <CloseOutlined
                      onClick={() => handleDeletePlayer(player.id)}
                    />
                  }
                  sx={{
                    backgroundColor: `${TeamColors[colorIndex].primaryColor}80`,
                    color: `${TeamColors[colorIndex].secondaryColor}`,
                    borderColor: `${TeamColors[colorIndex].primaryColor}`,
                  }}
                >
                  <Text sx={{ fontSize: '11px' }}>
                    {player.firstName} {player.lastName} - {player.season}
                  </Text>
                </Badge>
              );
            })}
          </Flex>
        </ScrollArea>

        <Tooltip label="Delete all Players" position="bottom" withArrow>
          <ActionIcon
            color="red"
            variant="filled"
            onClick={() => dispatch(deleteAllPlayers())}
          >
            <DeleteOutlined />
          </ActionIcon>
        </Tooltip>
      </Flex>
    );
  } else return <></>;
};

export default PlayerRow;
