import { FireOutlined, LineChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const MenuItems = [
  {
    label: <Link to="/stats-overview">Stat Overview</Link>,
    key: 'stat-overview',
    icon: <LineChartOutlined />,
  },
  {
    label: <Link to="/prizepicks">Prize Picks</Link>,
    key: 'prize-picks',
    icon: <FireOutlined />,
  },
];
