import React from "react";

import Col from "antd/es/col";
import Statistic from "antd/es/statistic";
import PageHeader from "antd/es/page-header";

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
import MetricCard from "../../../components/MetricCard/MetricCard";
import VizCard from "../../../components/VizCard/VizCard";
import { useGetPlayerByIdQuery } from "../../../app/API/Stats";

const StatDashboard: React.FC = () => {
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
  const blockRandom = Math.floor(Math.random() * 5);

  const { data, error, isLoading } = useGetPlayerByIdQuery("Lebron");
  console.log(data);

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={`Daily Stats`}
        // subTitle={date.toLocaleDateString()}
      />
      <StyledRow justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={12} xl={6}>
          <MetricCard
            title="Points Leader"
            bordered={false}
            player="Kevin Durant"
          >
            <Statistic value={pointRandom} style={{ padding: 0 }} />
          </MetricCard>
        </Col>
        <Col xs={24} sm={24} lg={12} xl={6}>
          <MetricCard
            title="Assists Leader"
            bordered={false}
            player="Chris Paul"
          >
            <Statistic value={assistRandom} />
          </MetricCard>
        </Col>
        <Col xs={24} sm={24} lg={12} xl={6}>
          <MetricCard
            title="Rebounds Leader"
            bordered={false}
            player="Nikola Jokic"
          >
            <Statistic value={reboundRandom} />
          </MetricCard>
        </Col>
        <Col xs={24} sm={24} lg={12} xl={6}>
          <MetricCard
            title="Blocks Leader"
            bordered={false}
            player="Joel Embiid"
          >
            <Statistic value={blockRandom} />
          </MetricCard>
        </Col>
      </StyledRow>
      <StyledRow justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={24} xl={12}>
          <VizCard title="FG% Chart" bordered={false}>
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
          <VizCard title="Points Chart" bordered={false}>
            <Statistic value={500} />
          </VizCard>
        </Col>
      </StyledRow>
      <StyledRow justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={24} xl={12}>
          <VizCard title="Chart" bordered={false}>
            <Statistic value={500} style={{ padding: 0 }} />
          </VizCard>
        </Col>
        <Col xs={24} sm={24} lg={24} xl={12}>
          <VizCard title="Chart" bordered={false}>
            <Statistic value={500} />
          </VizCard>
        </Col>
      </StyledRow>
    </>
  );
};

export default StatDashboard;
