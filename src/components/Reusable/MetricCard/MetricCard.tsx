import React, { ReactNode } from 'react';
import MetricCardStyled from './MetricCardStyles';

interface MetricCardProps {
  title: string;
  teamLogo: ReactNode;
  statistic: ReactNode;
  playerName: string;
  season: number | string;
  extra?: ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  teamLogo,
  statistic,
  playerName,
  season,
  extra,
}: MetricCardProps) => {
  return <div>t</div>;
};

export default MetricCard;
