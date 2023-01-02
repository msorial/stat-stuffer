import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Drawer, NavLink, Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  toggleSidebar,
  selectSidebarState,
} from '../../../app/reducers/uiSlice';
import { ReactComponent as Logo } from '../../../assets/logo/smallLogo.svg';
import { menuItems } from '../../../routes/MenuItems';
import ContactIcons from '../../Reusable/ContactIcons';

const StyledDrawer = styled(Drawer)`
  & .mantine-Drawer-body {
    height: calc(100% - 70px);
    padding: 5px;
  }
`;

const MobileSidebar: React.FC = () => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const sidebarOpen: boolean = useSelector(selectSidebarState);

  return (
    <StyledDrawer
      opened={sidebarOpen}
      onClose={() => dispatch(toggleSidebar())}
      padding="md"
      position="right"
      title={<Logo />}
    >
      <Stack justify="space-between" align="stretch" sx={{ height: '100%' }}>
        <div>
          {menuItems.map((item, index) => {
            return (
              <NavLink
                key={item.label}
                icon={item.icon}
                label={item.label}
                component={Link}
                to={item.route}
                active={index === active}
                onClick={() => {
                  setActive(index);
                  dispatch(toggleSidebar());
                }}
                variant="light"
                color="red"
                description={item.description}
              />
            );
          })}
        </div>

        <ContactIcons />
      </Stack>
    </StyledDrawer>
  );
};

export default MobileSidebar;
