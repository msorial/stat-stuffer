import React from 'react';
import { ActionIcon, Center, Navbar, Stack, Tooltip } from '@mantine/core';
import { IconMoonStars } from '@tabler/icons';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo/smallLogo.svg';
import { menuItems } from '../../../routes/MenuItems';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <Navbar
      width={{ base: 80 }}
      p="md"
      sx={{
        backgroundColor: '#121926',
      }}
    >
      <Center>
        <Logo />
      </Center>

      <Navbar.Section grow mt={20}>
        <Stack justify="center" align="center" spacing="md">
          {menuItems.map((item) => {
            return (
              <Tooltip
                key={item.label}
                label={item.label}
                position="right"
                withArrow
                transitionDuration={0}
              >
                <ActionIcon
                  size="lg"
                  color="red"
                  component={Link}
                  to={item.route}
                  variant={
                    item.route === location.pathname ? 'light' : 'transparent'
                  }
                  sx={{ width: '120%' }}
                >
                  {item.icon}
                </ActionIcon>
              </Tooltip>
            );
          })}
        </Stack>
      </Navbar.Section>

      <Navbar.Section>
        <Center>
          <ActionIcon
            variant="outline"
            sx={{ color: 'white' }}
            title="Toggle color scheme"
          >
            <IconMoonStars size={16} stroke={1.5} />
          </ActionIcon>
        </Center>
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
