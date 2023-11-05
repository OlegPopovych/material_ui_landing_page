import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, useMediaQuery } from '@mui/material';
import { overrides } from '../../styles';

const BurgerIcon = ({ openSidebar }) => {
  const visibleBreakpoint = useMediaQuery(overrides.breakpoints.down('md'));
  return (
    visibleBreakpoint && (
      <IconButton color="inherit" onClick={openSidebar}>
        <MenuIcon />
      </IconButton>
    )
  );
};

export default BurgerIcon;
