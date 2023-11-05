import { SwipeableDrawer, useMediaQuery } from '@mui/material';
import { Colors, overrides } from '../../styles';
import SidebarMenu from '../SidebarMenu';

const Sidebar = ({ open, onOpen, onClose }) => {
  const visibleBreakpoint = useMediaQuery(overrides.breakpoints.down('md'));

  return (
    visibleBreakpoint && (
      <SwipeableDrawer
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: Colors.inverse,
            color: Colors.white,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            borderRight: `1px solid ${Colors.primary}`,
          },
        }}
      >
        {open && <SidebarMenu />}
      </SwipeableDrawer>
    )
  );
};

export default Sidebar;
