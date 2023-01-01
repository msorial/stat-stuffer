import React, { useState } from 'react';
import { Drawer, NavLink } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  toggleSidebar,
  selectSidebarState,
} from '../../../app/reducers/uiSlice';
import { ReactComponent as Logo } from '../../../assets/logo/smallLogo.svg';
import { menuItems } from '../../../routes/MenuItems';

const MobileSidebar: React.FC = () => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const sidebarOpen: boolean = useSelector(selectSidebarState);

  return (
    <Drawer
      opened={sidebarOpen}
      onClose={() => dispatch(toggleSidebar())}
      padding="md"
      position="right"
      title={<Logo />}
    >
      {menuItems.map((item, index) => {
        return (
          <NavLink
            key={item.label}
            icon={item.icon}
            label={item.label}
            component={Link}
            to={item.route}
            active={index === active}
            onClick={() => setActive(index)}
            variant="light"
            color="red"
            description={item.description}
          />
        );
      })}
    </Drawer>
  );
};

export default MobileSidebar;
