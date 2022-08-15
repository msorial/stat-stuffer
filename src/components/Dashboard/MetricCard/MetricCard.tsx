import React, { ReactNode } from 'react';
import { Col, Row, Space, Tooltip } from 'antd';
import MetricCardStyled from './MetricCardStyles';

interface MetricCardProps {
  title: string;
  team?: ReactNode;
  stat: ReactNode;
  player: string;
  season: number | string;
  extra?: ReactNode;
}

// TODO: Needs refactoring
const MetricCard: React.FC<MetricCardProps> = ({
  title,
  team,
  stat,
  player,
  season,
  extra,
}: MetricCardProps) => {
  return (
    <MetricCardStyled
      bordered={false}
      title={title}
      extra={
        <Tooltip placement="top" title={'View Season Stats'}>
          <div style={{ fontSize: '18px', cursor: 'pointer' }}>{team}</div>
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
            <Col style={{ fontSize: '32px' }}>{stat}</Col>
            <Col>
              <Row style={{ fontSize: '18px', fontWeight: 'bold' }}>
                {player}
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
