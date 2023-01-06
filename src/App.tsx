import React from 'react';
import { MantineProvider } from '@mantine/core';
import { useSelector } from 'react-redux';
import { selectColorTheme } from './app/reducers/uiSlice';
import RootRouter from './routes/RootRouter';
import { CustomFonts } from './theme/CustomFonts';

const App: React.FC = () => {
  const darkMode: boolean = useSelector(selectColorTheme);

  return (
    <MantineProvider
      theme={{
        colorScheme: darkMode ? 'dark' : 'light',
        fontFamily: 'Cabin, sans-serif',
        headings: { fontFamily: 'Lato, sans-serif' },
      }}
    >
      <CustomFonts />
      <RootRouter />
    </MantineProvider>
  );
};

export default App;
