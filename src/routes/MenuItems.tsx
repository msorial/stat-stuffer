import { ReactNode } from 'react';
import { FireOutlined, LineChartOutlined } from '@ant-design/icons';

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  route: string;
  description: string;
}

export const menuItems: MenuItemProps[] = [
  {
    icon: <LineChartOutlined />,
    label: 'Average Overview',
    route: '/average-overview',
    description: 'View favorite players averages',
  },
  {
    icon: <FireOutlined />,
    label: 'Prize Picker',
    route: '/prize-picker',
    description: 'Use data to win your prizepicks',
  },
];
