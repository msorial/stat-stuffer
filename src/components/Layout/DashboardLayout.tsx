import { Grid, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MobileSidebar from './MobileSidebar';
import Sidebar from './Sidebar';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const DashboardLayout: React.FC = () => {
  const screens = useBreakpoint();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {screens.sm === true ? <Sidebar /> : <MobileSidebar />}
      <Layout>
        <Header />
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
