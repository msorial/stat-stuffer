import React from 'react';
import Col from 'antd/es/col';
import Statistic from 'antd/es/statistic';
import DashboardHeader from '../../components/Dashboard/DashboardHeader/DashboardHeader';
import VizCard from '../../components/Reusable/VizCard/VizCard';
import AssistsLeader from '../../components/Visualizations/AssistsLeader';
import ParGroupedBar from '../../components/Visualizations/ParGroupedBar';
import PointsLeader from '../../components/Visualizations/PointsLeader';
import ReboundsLeader from '../../components/Visualizations/ReboundsLeader';
import { StyledRow } from './StatDashboardStyles';

const StatDashboard: React.FC = () => {
  return (
    <>
      <DashboardHeader title="Player Averages Dashboard" />
      <StyledRow justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={12} xl={8}>
          <PointsLeader />
        </Col>
        <Col xs={24} sm={24} lg={12} xl={8}>
          <AssistsLeader />
        </Col>
        <Col xs={24} sm={24} lg={12} xl={8}>
          <ReboundsLeader />
        </Col>
      </StyledRow>

      <StyledRow justify="center" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={24} xl={12}>
          <VizCard title="Shooting Percentages" bordered={false}>
            <Statistic value={500} />
          </VizCard>

          {/* <ParGroupedBar /> */}
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
