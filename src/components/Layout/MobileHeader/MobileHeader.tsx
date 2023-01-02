import { Flex, Header, Burger, useMantineTheme } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectColorTheme,
  selectSidebarState,
  toggleSidebar,
} from '../../../app/reducers/uiSlice';
import { ReactComponent as Logo } from '../../../assets/logo/smallLogo.svg';
import ThemeToggle from '../../Reusable/ThemeToggle';

const MobileHeader: React.FC = () => {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const sidebarOpen: boolean = useSelector(selectSidebarState);
  const darkMode: boolean = useSelector(selectColorTheme);

  return (
    <Header height={60} p="md" fixed={false}>
      <Flex justify="space-between" align="center" direction="row">
        <Burger
          size="sm"
          color={darkMode ? theme.colors.gray[1] : theme.colors.dark[5]}
          opened={sidebarOpen}
          onClick={() => dispatch(toggleSidebar())}
        />

        <Logo />

        <ThemeToggle />
      </Flex>
    </Header>
  );
};

export default MobileHeader;
