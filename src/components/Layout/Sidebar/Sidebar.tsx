import React, { useState } from "react";
import { FireOutlined, LineChartOutlined } from "@ant-design/icons";
import Menu from "antd/es/menu";
import { Link } from "react-router-dom";
import StyledSider from "./SidebarStyles";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => setCollapsed(!collapsed);

  return (
    <StyledSider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<LineChartOutlined />}>
          <Link to="/">Stat Overview</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FireOutlined />}>
          <Link to="/PrizePicksPredictor">Prize Picks</Link>
        </Menu.Item>
      </Menu>
    </StyledSider>
  );
};

export default Sidebar;
