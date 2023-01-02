import React from 'react';
import { MantineProvider } from '@mantine/core';
import { useSelector } from 'react-redux';
import { selectColorTheme } from './app/reducers/uiSlice';
import RootRouter from './routes/RootRouter';

const App: React.FC = () => {
  const darkMode: boolean = useSelector(selectColorTheme);

  return (
    <MantineProvider theme={{ colorScheme: darkMode ? 'dark' : 'light' }}>
      <RootRouter />
    </MantineProvider>
  );
};

export default App;
