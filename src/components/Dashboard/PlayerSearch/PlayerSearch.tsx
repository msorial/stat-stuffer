import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Autocomplete, Input, ActionIcon, Flex } from '@mantine/core';
import { IconCalendar, IconShirtSport } from '@tabler/icons';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../../../app/reducers/playerSlice';
import { playerList } from '../../../lib/constants/PlayerList';

interface PlayerQueryObjectProps {
  playerName: string | undefined;
  season: number | string | undefined;
}

const PlayerSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [playerQueryObject, setPlayerQueryObject] =
    useState<PlayerQueryObjectProps>({
      playerName: '',
      season: '',
    });
  const { register, control, handleSubmit, reset, formState } = useForm({
    defaultValues: playerQueryObject,
  });

  const onSubmit = (data: any) => {
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

        const statsInfo = await fetch(
          `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerInfo.data[0].id}&season=${playerQueryObject.season}`
        ).then((res) => res.json());

        dispatch(
          addPlayer({
            id: playerInfo.data[0].id,
            firstName: playerInfo.data[0].first_name,
            lastName: playerInfo.data[0].last_name,
            team: playerInfo.data[0].team.abbreviation,

            games_played: statsInfo.data[0].games_played,
            season: statsInfo.data[0].season,
            min: statsInfo.data[0].min,
            fgm: statsInfo.data[0].fgm,
            fga: statsInfo.data[0].fga,
            fg3m: statsInfo.data[0].fg3m,
            fg3a: statsInfo.data[0].fg3a,
            ftm: statsInfo.data[0].ftm,
            fta: statsInfo.data[0].fta,
            oreb: statsInfo.data[0].oreb,
            dreb: statsInfo.data[0].dreb,
            reb: statsInfo.data[0].reb,
            ast: statsInfo.data[0].ast,
            stl: statsInfo.data[0].stl,
            blk: statsInfo.data[0].blk,
            turnover: statsInfo.data[0].turnover,
            pf: statsInfo.data[0].pf,
            pts: statsInfo.data[0].pts,
            fg_pct: statsInfo.data[0].fg_pct,
            fg3_pct: statsInfo.data[0].fg3_pct,
            ft_pct: statsInfo.data[0].ft_pct,
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
              placeholder="Search Player..."
              data={playerList}
              limit={4}
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
