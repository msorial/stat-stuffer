import React from 'react';
import { Drawer } from 'antd';
import Menu from 'antd/es/menu';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleSidebar,
  selectSidebarClosed,
} from '../../../app/reducers/uiSlice';
import { MenuItems } from '../../../routes/MenuItems';

const MobileSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const sidebarClosed = useSelector(selectSidebarClosed);

  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={() => dispatch(toggleSidebar())}
      open={!sidebarClosed}
    >
      <Menu theme="dark" items={MenuItems} mode="inline" />
    </Drawer>
  );
};

export default MobileSidebar;
