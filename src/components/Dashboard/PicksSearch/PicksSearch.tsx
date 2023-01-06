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
import {
  addStats,
  setBetDetails,
  PickerProps,
} from '../../../app/reducers/pickerSlice';
import { playerList } from '../../../lib/constants/PlayerList';
import { TeamAutocompleteData } from '../../../lib/constants/TeamAutocompleteData';
import { TeamList } from '../../../lib/constants/TeamList';

interface PicksQueryObjectProps {
  playerName: string;
  opposingTeam: string;
  betValue: number | undefined;
}

const PicksSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [playerQueryObject, setPlayerQueryObject] =
    useState<PicksQueryObjectProps>({
      playerName: '',
      opposingTeam: '',
      betValue: undefined,
    });
  const { register, control, handleSubmit } = useForm({
    defaultValues: playerQueryObject,
  });
  const [category, setCategory] = useState<string>('Points');

  const onSubmit = (data: PicksQueryObjectProps) => {
    const { playerName, opposingTeam, betValue } = data;

    if (playerName !== '' && betValue !== undefined && opposingTeam !== '') {
      setPlayerQueryObject({
        playerName: playerName,
        opposingTeam: opposingTeam,
        betValue: betValue,
      });

      const teamObject = TeamList.find(
        (team) => team.full_name === opposingTeam
      );

      dispatch(
        setBetDetails({
          betCategory: category,
          betValue: betValue,
          opposingTeam: teamObject,
        })
      );
    }
  };

  useEffect(() => {
    // TODO: add more checks here before exexuting
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

            return dateB - dateA;
          }
        );

        dispatch(addStats(gameStatsData));
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
            name="opposingTeam"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...register('opposingTeam', { required: true })}
                icon={<IconKarate stroke={1.5} size={18} />}
                placeholder="Enter Opponent"
                data={TeamAutocompleteData}
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

        <Grid.Col span={5}>
          <Controller
            name="betValue"
            control={control}
            render={({ field }) => (
              <NumberInput
                icon={
                  category === 'Points' ? (
                    <IconHexagonLetterP stroke={1.5} size={18} />
                  ) : category === 'Assists' ? (
                    <IconHexagonLetterA stroke={1.5} size={18} />
                  ) : category === 'Rebounds' ? (
                    <IconHexagonLetterR stroke={1.5} size={18} />
                  ) : (
                    <IconChartRadar stroke={1.5} size={18} />
                  )
                }
                placeholder={category}
                precision={1}
                step={0.5}
                stepHoldDelay={500}
                stepHoldInterval={100}
                {...field}
              />
            )}
          />
        </Grid.Col>

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
