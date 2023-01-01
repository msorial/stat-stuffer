import styled from 'styled-components';

const MetricCardStyled = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    #d3d3d3 0px 0px 0px 1px;

  .ant-card-head {
    width: 100%;
    border-bottom: none;
  }

  .ant-card-body {
    padding: 12px 24px 24px;
  }
`;

export default MetricCardStyled;
