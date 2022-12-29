import React, { ReactNode } from 'react';
import { Col, Row, Space, Tooltip } from 'antd';
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
  return (
    <MetricCardStyled
      title={title}
      extra={
        <Tooltip placement="top" title={'View Team Stats'}>
          <div style={{ fontSize: '18px', cursor: 'pointer' }}>{teamLogo}</div>
        </Tooltip>
      }
    >
      <Col>
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <Row
            align="middle"
            justify="space-between"
            style={{ height: '50px' }}
          >
            <Col style={{ fontSize: '32px' }}>{statistic}</Col>
            <Col>
              <Row style={{ fontSize: '18px', fontWeight: 'bold' }}>
                {playerName}
              </Row>
              <Row style={{ fontSize: '14px', fontStyle: 'italic' }}>
                {season}
              </Row>
            </Col>
          </Row>
          <Row align="middle" justify="center">
            {extra}
          </Row>
        </Space>
      </Col>
    </MetricCardStyled>
  );
};

export default MetricCard;
