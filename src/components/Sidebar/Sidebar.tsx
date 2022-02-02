import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  CalendarOutlined,
  FireOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => setCollapsed(!collapsed);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<CalendarOutlined />}>
          Day
        </Menu.Item>
        <Menu.Item key="2" icon={<LineChartOutlined />}>
          Week
        </Menu.Item>
        <Menu.Item key="3" icon={<FireOutlined />}>
          Month
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
