import { createTheme } from '@mui/material';
import { Colors } from '../../styles';

const theme = createTheme({
  components: {
    MuiBottomNavigation: {
      variants: [
        {
          props: {
            variant: 'fixed',
          },
          style: {
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: Colors.shaft,
            height: 40,
          },
        },
      ],
    },
    MuiBottomNavigationAction: {
      variants: [
        {
          props: {
            variant: 'br',
          },
          style: {
            borderRight: `1px solid ${Colors.primary}`,
          },
        },
      ],
      styleOverrides: {
        root: {
          color: Colors.primary,
          height: 40,
        },
      },
    },
  },
});

export default theme;
