import React from 'react';
import Menu from 'antd/es/menu';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleSidebar,
  selectSidebarClosed,
} from '../../../app/reducers/uiSlice';
import { MenuItems } from '../../../routes/MenuItems';
import StyledSider from './SidebarStyles';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const sidebarClosed = useSelector(selectSidebarClosed);

  return (
    <StyledSider
      collapsible
      collapsed={sidebarClosed}
      onCollapse={() => dispatch(toggleSidebar())}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        items={MenuItems}
        mode="inline"
        defaultSelectedKeys={['stat-overview']}
      />
    </StyledSider>
  );
};

export default Sidebar;
