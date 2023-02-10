import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../components/Layout/DashboardLayout';
import AiPicks from '../pages/AiPicks';
import AverageOverview from '../pages/AverageOverview';
import Page404 from '../pages/Page404';
import ParlayPicker from '../pages/ParlayPicker';

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="average-overview" element={<AverageOverview />} />
        <Route path="parlay-picker" element={<ParlayPicker />} />
        <Route path="ai-picks" element={<AiPicks />} />
        <Route path="/" element={<Navigate replace to="/average-overview" />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
