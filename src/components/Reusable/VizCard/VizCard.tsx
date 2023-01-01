import React, { ReactNode } from 'react';
import VizCardStyled from './VizCardStyles';

interface MetricCardProps {
  title: string;
  bordered: boolean;
  children: ReactNode;
}

const VizCard: React.FC<MetricCardProps> = ({
  title,
  bordered,
  children,
}: MetricCardProps) => {
  return <div>test</div>;
};

export default VizCard;
