import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import Logo from './Logo';
import ActionButtons from './ActionButtons';
import BurgerIcon from '../BurgerIcon';
import MainNav from '../MainNav';
import Sidebar from '../Sidebar';

const Header = () => {

	const [open, setOpen] = useState(false);
	const handleSidebarOpen = () => setOpen(true);
	const handleSidebarClose = () => setOpen(false);

	return (
		<Grid container spacing={2} justifyContent="space-around" alignItems="center"
			sx={{ boxShadow: 6, padding: "0px 20px", margin: "0" }}>
			<Grid xs={1}
				sx={{
					display: { sm: 'flex', md: "none" },
					justifyContent: "end"
				}}>
				<BurgerIcon openSidebar={handleSidebarOpen} />
				<Sidebar
					open={open}
					onOpen={handleSidebarOpen}
					onClose={handleSidebarClose}
				/>
			</Grid>
			<Grid xs={11} md={5} lg={5}
				sx={{
					height: "160px",
					display: 'flex',
					alignContent: 'center',
					justifyContent: "space-around",
					height: "105px",
					padding: "0",
					flexDirection: "column",
					justifyContent: "center"
				}}>
				<Logo />
			</Grid>
			<Grid md={5} lg={4}
				sx={{
					display: { xs: "none", md: "flex" },
					padding: "0",
					flexDirection: "column",
					justifyContent: "center",
					alignContent: 'center'
				}}>
				<MainNav />
			</Grid>
			<Grid md={2} lg={3}
				sx={{
					display: { xs: "none", md: "block" },
					padding: "0",
					flexDirection: "column",
					justifyContent: "center",
					alignContent: 'center',
					alignContent: 'center'
				}}>
				<ActionButtons />
			</Grid>
		</Grid >
	)
}
export default Header;
