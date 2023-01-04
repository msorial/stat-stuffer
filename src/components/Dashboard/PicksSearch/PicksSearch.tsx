import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {
  Autocomplete,
  ActionIcon,
  NumberInput,
  Grid,
  Select,
} from '@mantine/core';
import {
  IconChartRadar,
  IconHexagonLetterA,
  IconHexagonLetterP,
  IconHexagonLetterR,
  IconKarate,
  IconShirtSport,
} from '@tabler/icons';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPicks, PickerProps } from '../../../app/reducers/pickerSlice';
import { playerList } from '../../../lib/constants/PlayerList';
import { teamList } from '../../../lib/constants/Teams';

interface PicksQueryObjectProps {
  playerName: string | undefined;
  opponent: string | undefined;
  points?: number | undefined;
  assists?: number | undefined;
  rebounds?: number | undefined;
  par?: number | undefined;
}

const PicksSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [playerQueryObject, setPlayerQueryObject] =
    useState<PicksQueryObjectProps>({
      playerName: '',
      opponent: '',
      points: undefined,
      assists: undefined,
      rebounds: undefined,
      par: undefined,
    });
  const { register, control, handleSubmit, reset, formState } = useForm({
    defaultValues: playerQueryObject,
  });
  const [category, setCategory] = useState<string>('Points');

  const onSubmit = (data: PicksQueryObjectProps) => {
    const { playerName, opponent, points, assists, rebounds, par } = data;

    if (playerName !== '') {
      setPlayerQueryObject({
        playerName: playerName,
        opponent: opponent,
        points: points,
        assists: assists,
        rebounds: rebounds,
        par: par,
      });
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        playerName: '',
        opponent: '',
        points: undefined,
        assists: undefined,
        rebounds: undefined,
        par: undefined,
      });
    }
  }, [formState, reset]);

  // Need new logic here to store all games from current season
  useEffect(() => {
    if (playerQueryObject.playerName !== '') {
      const fetchData = async () => {
        const playerInfo = await fetch(
          `https://www.balldontlie.io/api/v1/players/?search=${playerQueryObject.playerName}`
        ).then((res) => res.json());

        const gameStats = await fetch(
          `https://www.balldontlie.io/api/v1/stats?player_ids[]=${
            playerInfo.data[0].id
          }&seasons[]=${2022}&per_page=100`
        ).then((res) => res.json());

        const gameStatsData: PickerProps[] = gameStats.data.sort(
          (a: PickerProps, b: PickerProps) => {
            const dateA: number = Date.parse(a.game.date);
            const dateB: number = Date.parse(b.game.date);

            return dateA - dateB;
          }
        );

        dispatch(addPicks(gameStatsData));
      };

      fetchData().catch(console.error);
    }
  }, [dispatch, playerQueryObject]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid gutter="md">
        <Grid.Col span={6}>
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
                {...field}
              />
            )}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <Controller
            name="opponent"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...register('opponent', { required: true })}
                icon={<IconKarate stroke={1.5} size={18} />}
                placeholder="Enter Opponent"
                data={teamList}
                limit={4}
                {...field}
              />
            )}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <Select
            placeholder="Prop Category"
            searchable
            nothingFound="No Options"
            value={category}
            onChange={(option: string) => setCategory(option)}
            data={['Points', 'Assists', 'Rebounds', 'Pts + Asts + Rebs']}
          />
        </Grid.Col>

        {category === 'Points' ? (
          <Grid.Col span={5}>
            <Controller
              name="points"
              control={control}
              render={({ field }) => (
                <NumberInput
                  icon={<IconHexagonLetterP stroke={1.5} size={18} />}
                  placeholder="Points"
                  precision={1}
                  step={0.5}
                  stepHoldDelay={500}
                  stepHoldInterval={100}
                  {...field}
                />
              )}
            />
          </Grid.Col>
        ) : category === 'Assists' ? (
          <Grid.Col span={5}>
            <Controller
              name="assists"
              control={control}
              render={({ field }) => (
                <NumberInput
                  icon={<IconHexagonLetterA stroke={1.5} size={18} />}
                  placeholder="Assists"
                  precision={1}
                  step={0.5}
                  stepHoldDelay={500}
                  stepHoldInterval={100}
                  {...field}
                />
              )}
            />
          </Grid.Col>
        ) : category === 'Rebounds' ? (
          <Grid.Col span={5}>
            <Controller
              name="rebounds"
              control={control}
              render={({ field }) => (
                <NumberInput
                  icon={<IconHexagonLetterR stroke={1.5} size={18} />}
                  placeholder="Rebounds"
                  precision={1}
                  step={0.5}
                  stepHoldDelay={500}
                  stepHoldInterval={100}
                  {...field}
                />
              )}
            />
          </Grid.Col>
        ) : category === 'Pts + Asts + Rebs' ? (
          <Grid.Col span={5}>
            <Controller
              name="par"
              control={control}
              render={({ field }) => (
                <NumberInput
                  icon={<IconChartRadar stroke={1.5} size={18} />}
                  placeholder="Pts + Asts + Rebs"
                  precision={1}
                  step={0.5}
                  stepHoldDelay={500}
                  stepHoldInterval={100}
                  {...field}
                />
              )}
            />
          </Grid.Col>
        ) : (
          <></>
        )}

        <Grid.Col span={1}>
          <ActionIcon color="green" radius="sm" variant="light" type="submit">
            <SearchOutlined />
          </ActionIcon>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default PicksSearch;
