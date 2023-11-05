import ButtonGroup from '@mui/material/ButtonGroup';
import { useMediaQuery } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';

import { overrides } from '../../styles';

const ActionButtons = () => {
	const visibleBreakpoint = useMediaQuery(overrides.breakpoints.up('md'));
	return (
		visibleBreakpoint && (
			<ButtonGroup variant="text" aria-label="text button group"
				sx={{
					display: 'flex',
					justifyContent: "space-between"
				}}>
				<Button
					sx={{ width: "100%" }}>
					<PersonIcon />
				</Button>
				<Button
					sx={{ width: "100%" }}>
					<FavoriteIcon />
				</Button>
				<Button
					sx={{ width: "100%" }}>
					<NotificationsIcon />
				</Button>
			</ButtonGroup >
		)
	)
}

export default ActionButtons;