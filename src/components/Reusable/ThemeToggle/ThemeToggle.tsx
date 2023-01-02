import { ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectColorTheme, toggleTheme } from '../../../app/reducers/uiSlice';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode: boolean = useSelector(selectColorTheme);

  return (
    <ActionIcon
      title="Toggle Theme"
      onClick={() => dispatch(toggleTheme())}
      sx={(theme) => ({
        backgroundColor: darkMode ? theme.colors.dark[6] : theme.colors.gray[0],
        color: darkMode ? theme.colors.yellow[4] : theme.colors.blue[6],
      })}
    >
      {darkMode ? (
        <IconSun size={16} stroke={1.5} />
      ) : (
        <IconMoonStars size={16} stroke={1.5} />
      )}
    </ActionIcon>
  );
};

export default ThemeToggle;
