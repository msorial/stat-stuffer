import React, { useState } from "react";
import Menu from "antd/es/menu";
import StyledSider from "./SidebarStyles";
import { FireOutlined, LineChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => setCollapsed(!collapsed);

  return (
    <StyledSider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div
        className="logo"
        style={{ position: "-webkit-sticky", top: "10px" }}
      />
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

export default SideBar;
