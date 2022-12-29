import Card from 'antd/es/card';
import styled from 'styled-components';

const VizCardStyled = styled(Card)`
  height: 400px;
  width: 100%;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    #d3d3d3 0px 0px 0px 1px;
  text-align: center;
  vertical-align: middle;

  .ant-card-head {
    width: 100%;
    padding: 5px 10px;
    border-bottom: none;
  }

  .ant-card-body {
    padding: 0px 15px 15px;
    height: 80%;
    width: 100%;
  }
`;

export default VizCardStyled;
