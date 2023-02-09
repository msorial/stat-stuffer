import { ReactNode } from 'react';
import {
  FireOutlined,
  FundProjectionScreenOutlined,
  TrophyOutlined,
} from '@ant-design/icons';

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  route: string;
  description: string;
}

export const menuItems: MenuItemProps[] = [
  {
    icon: <FundProjectionScreenOutlined />,
    label: 'Average Overview',
    route: '/average-overview',
    description: 'NBA Player Season Averages',
  },
  {
    icon: <FireOutlined />,
    label: 'Parlay Picker',
    route: '/parlay-picker',
    description: 'Use Data to Win your Parlays',
  },
  {
    icon: <TrophyOutlined />,
    label: 'AI Picker',
    route: '/ai-parlays',
    description: 'AI-Powered Parlays',
  },
];
