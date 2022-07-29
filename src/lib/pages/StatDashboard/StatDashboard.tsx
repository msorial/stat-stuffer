import React from "react";

import Col from "antd/es/col";
import Statistic from "antd/es/statistic";
import PageHeader from "antd/es/page-header";
import Tag from "antd/es/tag";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { StyledRow } from "./StatDashboardStyles";
import MetricCard from "../../../components/Dashboard/MetricCard/MetricCard";
import VizCard from "../../../components/Dashboard/VizCard/VizCard";
import { deletePlayer, selectPlayers } from "../../../app/reducers/playerSlice";
import { useSelector, useDispatch } from "react-redux";

const StatDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const PlayerData = [
    {
      name: "Lebron James",
      uv: 4000,
      points: Math.floor(Math.random() * 40),
      amt: 2400,
    },
    {
      name: "Devin Booker",
      uv: 3000,
      points: Math.floor(Math.random() * 40),
      amt: 2210,
    },
    {
      name: "Steph Curry",
      uv: 2000,
      points: Math.floor(Math.random() * 40),
      amt: 2290,
    },
    {
      name: "Trae Young",
      uv: 2780,
      points: Math.floor(Math.random() * 40),
      amt: 2000,
    },
    {
      name: "Joel Embiid",
      uv: 1890,
      points: Math.floor(Math.random() * 40),
      amt: 2181,
    },
  ];

  const pointRandom = Math.floor(Math.random() * 40);
  const assistRandom = Math.floor(Math.random() * 14);
  const reboundRandom = Math.floor(Math.random() * 15);

  const handleDeletePlayer = (id: number) => {
    dispatch(deletePlayer(id));
  };

  const playerArray = useSelector(selectPlayers);
  console.log(playerArray);

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={`Daily Stats`}
        subTitle={playerArray.map((player) => {
          return (
            <Tag
              key={player.id}
              closable
              onClose={() => handleDeletePlayer(player.id)}
            >
              {player.firstName} {player.lastName}
            </Tag>
          );
        })}
      />
      <StyledRow justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={12} xl={8}>
          <MetricCard title="Points Leader" player="Kevin Durant">
            <Statistic value={pointRandom} style={{ padding: 0 }} />
          </MetricCard>
        </Col>
        <Col xs={24} sm={24} lg={12} xl={8}>
          <MetricCard title="Assists Leader" player="Chris Paul">
            <Statistic value={assistRandom} />
          </MetricCard>
        </Col>
        <Col xs={24} sm={24} lg={12} xl={8}>
          <MetricCard title="Rebounds Leader" player="Joel Embiid">
            <Statistic value={reboundRandom} />
          </MetricCard>
        </Col>
      </StyledRow>

      <StyledRow justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={24} xl={12}>
          <VizCard title="Grouped Stats" bordered={false}>
            <ResponsiveContainer width={"99%"} aspect={3}>
              <AreaChart
                height={300}
                width={400}
                data={PlayerData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  padding={{ left: 15, right: 15 }}
                  interval={0}
                />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="points"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </VizCard>
        </Col>
        <Col xs={24} sm={24} lg={24} xl={12}>
          <VizCard title="Shooting Percentages" bordered={false}>
            <Statistic value={500} />
          </VizCard>
        </Col>
      </StyledRow>

      <StyledRow justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={24} xl={24}>
          <VizCard title="Stats Table" bordered={false}>
            <Statistic value={500} style={{ padding: 0 }} />
          </VizCard>
        </Col>
      </StyledRow>
    </>
  );
};

export default StatDashboard;
