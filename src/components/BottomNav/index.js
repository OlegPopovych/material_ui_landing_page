import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  ThemeProvider,
} from '@mui/material';
import { Favorite, Notifications, Person } from '@mui/icons-material';
import { overrides } from '../../styles';
import BottomNavTheme from './BottomNavTheme';

const BottomNav = () => {
  const { breakpoints } = overrides;
  const visibleBreakpoint = useMediaQuery(breakpoints.down('md'));
  return (
    visibleBreakpoint && (
      <ThemeProvider theme={BottomNavTheme}>
        <BottomNavigation variant="fixed">
          <BottomNavigationAction variant="br" icon={<Favorite />} />
          <BottomNavigationAction variant="br" icon={<Notifications />} />
          <BottomNavigationAction icon={<Person />} />
        </BottomNavigation>
      </ThemeProvider>
    )
  );
};

export default BottomNav;
