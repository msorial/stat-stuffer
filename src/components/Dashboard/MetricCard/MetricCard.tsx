import React, { ReactNode } from "react";

import MetricCardStyled from "./MetricCardStyles";

interface MetricCardProps {
  title: string;
  children: ReactNode;
  player: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  children,
  player,
}: MetricCardProps) => {
  return (
    <MetricCardStyled bordered={false} title={title}>
      {children}
      <div>{player}</div>
    </MetricCardStyled>
  );
};

export default MetricCard;
