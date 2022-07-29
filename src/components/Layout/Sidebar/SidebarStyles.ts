import styled from "styled-components";

import Layout from "antd/es/layout";
const { Sider } = Layout;

const StyledSider = styled(Sider)`
  background-color: #082032;

  .ant-menu,
  .ant-menu-root,
  .ant-menu-vertical,
  .ant-menu-dark,
  .ant-menu-inline-collapsed {
    position: -webkit-sticky;
    position: sticky;
    top: 55px;
    background-color: #082032;
  }

  .ant-menu-item-selected {
    background-color: #eb344c !important;
  }

  .ant-layout-sider-trigger {
    background-color: #eb344c !important;
  }

  .logo {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
  }
`;

export default StyledSider;
