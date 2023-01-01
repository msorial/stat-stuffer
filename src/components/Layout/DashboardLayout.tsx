import { AppShell, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import MobileSidebar from './MobileSidebar';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';
import Sidebar from './Sidebar';

const DashboardLayout: React.FC = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <AppShell
      padding="md"
      layout="alt"
      header={isMobile ? <PageHeader /> : <></>}
      navbar={isMobile ? <MobileSidebar /> : <Sidebar />}
      // footer={<PageFooter />}
    >
      <Outlet />
    </AppShell>
  );
};

export default DashboardLayout;
