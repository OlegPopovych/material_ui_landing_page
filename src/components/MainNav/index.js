import { useState } from 'react';
import { Toolbar, Stack, Menu, MenuItem, useMediaQuery } from '@mui/material';
import Button from './HeaderNavButton';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { overrides } from '../../styles';

const MainNav = () => {
  const visibleBreakpoint = useMediaQuery(overrides.breakpoints.up('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    visibleBreakpoint && (
      <Toolbar>
        <Stack direction="row">
          <Button color="inherit">Home</Button>
          <Button color="inherit">Volunteer</Button>
          <Button
            color="inherit"
            id="stories-button"
            onClick={handleClick}
            aria-controls={open && 'stories-menu'}
            aria-haspopup={true}
            aria-expanded={open && true}
            endIcon={<ArrowDownIcon />}
          >
            Stories
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="stories-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'stories-button',
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    )
  );
};

export default MainNav;
