import React from 'react';
import { Center, Loader } from '@mantine/core';

const PrizePicksDashboard: React.FC = () => {
  return (
    <Center sx={{ height: '100%' }}>
      <Loader size="lg" variant="dots" color="red" />
    </Center>
  );
};

export default PrizePicksDashboard;
