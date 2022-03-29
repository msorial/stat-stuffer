import React, { ReactNode } from "react";
import Card from "antd/es/card";

import MetricCardStyled from "./MetricCardStyles";

interface MetricCardProps {
  title: string;
  bordered: boolean;
  children: ReactNode;
  player: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  bordered,
  children,
  player,
}: MetricCardProps) => {
  return (
    <MetricCardStyled bordered={bordered} title={title}>
      {children}
      <div>{player}</div>
    </MetricCardStyled>
  );
};

export default MetricCard;
