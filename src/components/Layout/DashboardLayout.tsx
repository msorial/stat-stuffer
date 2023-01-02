import { AppShell, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import MobileHeader from './MobileHeader';
import MobileSidebar from './MobileSidebar';
import Sidebar from './Sidebar';

const DashboardLayout: React.FC = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <AppShell
      layout="alt"
      header={isMobile ? <MobileHeader /> : <></>}
      navbar={isMobile ? <MobileSidebar /> : <Sidebar />}
      sx={{
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[1],
        },
      }}
    >
      <Outlet />
    </AppShell>
  );
};

export default DashboardLayout;
