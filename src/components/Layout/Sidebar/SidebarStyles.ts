import Layout from 'antd/es/layout';
import styled from 'styled-components';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  background-color: #121926;

  .ant-menu,
  .ant-menu-root,
  .ant-menu-vertical,
  .ant-menu-dark,
  .ant-menu-inline-collapsed {
    position: -webkit-sticky;
    position: sticky;
    top: 65px;
    background-color: #121926;
  }

  .ant-menu-item-selected {
    background-color: #3d424d !important;
  }

  .ant-layout-sider-trigger {
    background-color: #3d424d;
    position: sticky;
    bottom: 0;
  }

  .logo {
    position: sticky;
    top: 20px;
  }
`;

export default StyledSider;
