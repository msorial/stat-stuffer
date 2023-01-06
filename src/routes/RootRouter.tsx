import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../components/Layout/DashboardLayout';
import AverageOverviewDashboard from '../pages/AvgOverviewDashboard/AvgOverviewDashboard';
import Page404 from '../pages/Page404';
import PrizePicksDashboard from '../pages/PrizePicksDashboard/PrizePicksDashboard';

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="average-overview" element={<AverageOverviewDashboard />} />
        <Route path="prize-picker" element={<PrizePicksDashboard />} />
        <Route path="/" element={<Navigate replace to="/average-overview" />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
