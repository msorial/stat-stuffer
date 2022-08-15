import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, message } from 'antd';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addPlayer } from '../../../app/reducers/playerSlice';

const StyledInput = styled(Input)`
  width: 200px;
  vertical-align: middle;
`;

const StyledDatePick = styled(DatePicker)`
  width: 160px;
  vertical-align: middle;
`;

const PlayerSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState<string>('');
  const [season, setSeason] = useState<number>();
  const [form] = Form.useForm();

  const onFinish = (values: {
    playerName: string;
    season: { _d: moment.MomentInput };
  }) => {
    const playerNameInput = values.playerName;
    const seasonInput = moment(values.season._d).format('YYYY');

    if (playerNameInput !== '' && seasonInput !== undefined) {
      setPlayerName(playerNameInput);
      setSeason(parseInt(seasonInput));
    }

    form.resetFields();
  };

  const onFinishFailed = () => {
    message.error('This is an error message');
  };

  useEffect(() => {
    if (playerName !== '' && season !== undefined) {
      const fetchData = async () => {
        const playerInfo = await fetch(
          `https://www.balldontlie.io/api/v1/players/?search=${playerName}`
        ).then((res) => res.json());

        const statsInfo = await fetch(
          `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerInfo.data[0].id}&season=${season}`
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
  }, [dispatch, playerName, season]);

  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="inline"
      requiredMark={'optional'}
    >
      <Form.Item name="playerName">
        <StyledInput placeholder="Search Player" allowClear />
      </Form.Item>

      <Form.Item name="season">
        <StyledDatePick picker="year" />
      </Form.Item>

      <Form.Item name="Search">
        <Button
          type="default"
          shape="circle"
          htmlType="submit"
          icon={<SearchOutlined />}
        />
      </Form.Item>
    </Form>
  );
};

export default PlayerSearch;
