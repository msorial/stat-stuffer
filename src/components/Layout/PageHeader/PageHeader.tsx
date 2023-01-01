import { Flex, Header, Burger, ActionIcon } from '@mantine/core';
import { IconMoonStars } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSidebarState,
  toggleSidebar,
} from '../../../app/reducers/uiSlice';
import { ReactComponent as Logo } from '../../../assets/logo/smallLogo.svg';

const PageHeader: React.FC = () => {
  const dispatch = useDispatch();
  const sidebarOpen: boolean = useSelector(selectSidebarState);

  return (
    <Header height={60} p="md">
      <Flex justify="space-between" align="center" direction="row">
        <Burger
          size="sm"
          color="#121926"
          opened={sidebarOpen}
          onClick={() => dispatch(toggleSidebar())}
        />

        <Logo />

        <ActionIcon
          variant="outline"
          sx={{ color: '#121926' }}
          title="Toggle color scheme"
        >
          <IconMoonStars size={16} stroke={1.5} />
        </ActionIcon>
      </Flex>
    </Header>
  );
};

export default PageHeader;
