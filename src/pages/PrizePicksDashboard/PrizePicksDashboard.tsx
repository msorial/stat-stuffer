import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Result } from 'antd';
import PrizePicksDashboardStyles from './PrizePicksDashboardStyles';

const PrizePicksDashboard: React.FC = () => {
  return (
    <PrizePicksDashboardStyles>
      <Result icon={<LoadingOutlined />} title="Coming Soon!" />
    </PrizePicksDashboardStyles>
  );
};

export default PrizePicksDashboard;
