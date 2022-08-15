import React from 'react';
import { PageHeader } from 'antd';
import PlayerRow from '../PlayerRow';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  return (
    <PageHeader
      className="site-page-header"
      title={title}
      subTitle={<PlayerRow />}
    />
  );
};

export default DashboardHeader;
