import styled from "styled-components";

import Layout from "antd/es/layout";
const { Sider } = Layout;

const StyledSider = styled(Sider)`
  .ant-menu,
  .ant-menu-root,
  .ant-menu-vertical,
  .ant-menu-dark,
  .ant-menu-inline-collapsed {
    position: -webkit-sticky;
    position: sticky;
    top: 55px;
  }

  .logo {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
  }
`;

export default StyledSider;
