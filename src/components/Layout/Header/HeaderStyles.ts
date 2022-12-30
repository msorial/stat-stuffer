import Layout from 'antd/es/layout';
import styled from 'styled-components';
const { Header } = Layout;

const StyledHeader = styled(Header)`
  margin-bottom: 20px;
  border-bottom: 1px solid #e2e2e2;
  background: #fff;
  padding: 0px 15px;
  position: sticky;
  top: 0;
`;

export default StyledHeader;
