import React from "react";

import Col from "antd/es/col";
import Statistic from "antd/es/statistic";
import PageHeader from "antd/es/page-header";

import { StyledRow } from "./PrizePicksDashboardStyles";
import MetricCard from "../../../components/MetricCard/MetricCard";
import VizCard from "../../../components/VizCard/VizCard";
import HeatMap from "@uiw/react-heat-map";
// import Tooltip from "@uiw/react-tooltip";
import Tooltip from "antd/es/tooltip";

const PrizePicksDashboard: React.FC = () => {
  const value = [
    { date: "2016/01/11", count: 2, content: "test" },
    { date: "2016/04/12", count: 2, content: "t" },
    { date: "2016/05/01", count: 5, content: "t" },
    { date: "2016/05/02", count: 5, content: "t" },
    { date: "2016/05/03", count: 1, content: "a" },
    { date: "2016/05/04", count: 11, content: "f" },
    { date: "2016/05/08", count: 32, content: "f" },
  ];

  const pointRandom = Math.floor(Math.random() * 40);
  const assistRandom = Math.floor(Math.random() * 14);

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={`Prize Picks Predictor`}
        // subTitle={date.toLocaleDateString()}
      />
      <StyledRow justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={12} xl={12}>
          <MetricCard
            title="Season Percentage"
            bordered={false}
            player="Kevin Durant"
          >
            <Statistic value={pointRandom} style={{ padding: 0 }} />
          </MetricCard>
        </Col>
        <Col xs={24} sm={24} lg={12} xl={12}>
          <MetricCard
            title="Last 5 Percentage"
            bordered={false}
            player="Chris Paul"
          >
            <Statistic value={assistRandom} />
          </MetricCard>
        </Col>
      </StyledRow>
      <StyledRow justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={24} xl={24}>
          <VizCard title="Season Heatmap" bordered={false}>
            <div
              className="container"
              style={{ width: "910px", margin: "0 auto" }}
            >
              <HeatMap
                value={value}
                // use screensize hook to make dynamic
                width={"100%"}
                height={"100%"}
                style={{ color: "#ad001d" }}
                startDate={new Date("2016/01/01")}
                endDate={new Date("2016/12/31")}
                rectSize={14}
                space={2.5}
                panelColors={{
                  0: "#f4decd",
                  2: "#e4b293",
                  4: "#d48462",
                  10: "#c2533a",
                  20: "#ad001d",
                  30: "#000",
                }}
                rectRender={(props, data) => {
                  // if (!data.count) return <rect {...props} />;
                  return (
                    <Tooltip
                      key={props.key}
                      placement="top"
                      title={
                        <>
                          <div>Date: {data.date}</div>
                          <div>Stats: {data.count}</div>
                        </>
                      }
                    >
                      <rect {...props} />
                    </Tooltip>
                  );
                }}
              />
            </div>
          </VizCard>
        </Col>
      </StyledRow>
    </>
  );
};

export default PrizePicksDashboard;
