// theme/theme.ts
import { createTheme } from '@mui/material/styles';

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      // You can customize more here for light/dark
      ...(mode === 'light'
        ? {
            // light mode customizations
            background: {
              default: '#f4f6f8',
            },
          }
        : {
            // dark mode customizations
            background: {
              default: '#121212',
            },
          }),
    },
  });

export default getTheme;
