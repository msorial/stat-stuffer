import Layout from 'antd/es/layout';
import styled from 'styled-components';
const { Header } = Layout;

const StyledHeader = styled(Header)`
  margin-bottom: 20px;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 15px;
`;

export default StyledHeader;
