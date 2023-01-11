import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Autocomplete, Input, ActionIcon, Flex } from '@mantine/core';
import { IconCalendar, IconShirtSport } from '@tabler/icons';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPlayer, PlayerProps } from '../../../app/reducers/playerSlice';
import { playerList } from '../../../lib/constants/PlayerList';

interface PlayerQueryObjectProps {
  playerName: string | undefined;
  season: number | undefined;
}

const PlayerSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [playerQueryObject, setPlayerQueryObject] =
    useState<PlayerQueryObjectProps>({
      playerName: '',
      season: undefined,
    });
  const { register, control, handleSubmit, reset, formState } = useForm({
    defaultValues: playerQueryObject,
  });

  const onSubmit = (data: PlayerQueryObjectProps) => {
    const playerNameInput = data.playerName;
    const seasonInput = data.season;

    if (playerNameInput !== '' && seasonInput !== undefined) {
      setPlayerQueryObject({
        playerName: playerNameInput,
        season: seasonInput,
      });
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ playerName: '', season: undefined });
    }
  }, [formState, reset]);

  useEffect(() => {
    if (
      playerQueryObject.playerName !== '' &&
      playerQueryObject.season !== undefined
    ) {
      const fetchData = async () => {
        const playerInfo = await fetch(
          `https://www.balldontlie.io/api/v1/players/?search=${playerQueryObject.playerName}`
        ).then((res) => res.json());

        const playerAverages = await fetch(
          `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerInfo.data[0].id}&season=${playerQueryObject.season}`
        ).then((res) => res.json());

        const playerAveragesData: PlayerProps = playerAverages.data[0];

        dispatch(
          addPlayer({
            id: playerInfo.data[0].id,
            firstName: playerInfo.data[0].first_name,
            lastName: playerInfo.data[0].last_name,
            team: playerInfo.data[0].team.abbreviation,
            teamId: playerInfo.data[0].team.id,

            games_played: playerAveragesData.games_played,
            season: playerAveragesData.season,
            min: playerAveragesData.min,
            fgm: playerAveragesData.fgm,
            fga: playerAveragesData.fga,
            fg3m: playerAveragesData.fg3m,
            fg3a: playerAveragesData.fg3a,
            ftm: playerAveragesData.ftm,
            fta: playerAveragesData.fta,
            oreb: playerAveragesData.oreb,
            dreb: playerAveragesData.dreb,
            reb: playerAveragesData.reb,
            ast: playerAveragesData.ast,
            stl: playerAveragesData.stl,
            blk: playerAveragesData.blk,
            turnover: playerAveragesData.turnover,
            pf: playerAveragesData.pf,
            pts: playerAveragesData.pts,
            fg_pct: playerAveragesData.fg_pct,
            fg3_pct: playerAveragesData.fg3_pct,
            ft_pct: playerAveragesData.ft_pct,
          })
        );
      };

      fetchData().catch(console.error);
    }
  }, [dispatch, playerQueryObject]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        gap="xs"
        justify="center"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        <Controller
          name="playerName"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...register('playerName', { required: true })}
              icon={<IconShirtSport stroke={1.5} size={18} />}
              placeholder="Search Player"
              data={playerList}
              limit={4}
              dropdownPosition="bottom"
              {...field}
            />
          )}
        />

        <Controller
          name="season"
          control={control}
          render={({ field }) => (
            <Input
              {...register('season', { required: true })}
              icon={<IconCalendar stroke={1.5} size={18} />}
              placeholder="Season"
              type="number"
              {...field}
            />
          )}
        />

        <ActionIcon color="green" radius="sm" variant="light" type="submit">
          <SearchOutlined />
        </ActionIcon>
      </Flex>
    </form>
  );
};

export default PlayerSearch;
