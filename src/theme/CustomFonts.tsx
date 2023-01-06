import { Global } from '@mantine/core';
import cabin from '../assets/fonts/Cabin.woff2';
import lato from '../assets/fonts/Lato.woff2';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Cabin',
            src: `url('${cabin}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Lato',
            src: `url('${lato}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
