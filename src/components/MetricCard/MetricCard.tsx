import React, { ReactNode } from "react";
import { Card } from "antd";

import MetricCardStyled from "./MetricCardStyles";

interface MetricCardProps {
  title: string;
  bordered: boolean;
  children: ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  bordered,
  children,
}: MetricCardProps) => {
  return (
    <MetricCardStyled bordered={bordered} title={title}>
      {children}
    </MetricCardStyled>
  );
};

export default MetricCard;
