import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../components/Layout/DashboardLayout';
import PrizePicksDashboard from '../pages/PrizePicksDashboard/PrizePicksDashboard';
import StatDashboard from '../pages/StatDashboard/StatDashboard';

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="average-overview" element={<StatDashboard />} />
        <Route path="prize-picker" element={<PrizePicksDashboard />} />
        <Route path="/" element={<Navigate replace to="/average-overview" />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
