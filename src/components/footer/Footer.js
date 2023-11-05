// import Grid from '@mui/material/Unstable_Grid2';
import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import AlignTypography from './AlignTypo';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Colors, overrides } from '../../styles';

const Footer = () => {
	return (
		<Grid
			container 
			sx={{
				flexDirection: 'row',
				backgroundColor: Colors.shaft,
				marginBottom: "20px",
				maxWidth: "95%",
				marginLeft: "auto",
				marginRight: "auto",
			}}>
			<ThemeProvider theme={overrides}>
				<Grid item xs={12} sm={12} md={12} lg={6}>
					<AlignTypography paragraph={false} textTransform={"uppercase"}>
						About us
					</AlignTypography>
					<AlignTypography >
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dicta facilis explicabo quam voluptatibus aliquam sint consequatur tenetur necessitatibus libero deserunt dignissimos est quae dolorum, consectetur reprehenderit distinctio pariatur excepturi?
					</AlignTypography>
					<Grid sx={{ padding: "5px" }}>
						<FacebookIcon sx={{ paddingRight: '10px' }} />
						<TwitterIcon sx={{ paddingRight: '10px' }} />
						<InstagramIcon sx={{ paddingRight: '10px' }} />
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} lg={3}>
					<AlignTypography textTransform={"uppercase"}>
						Information
					</AlignTypography>
					<AlignTypography  >
						Lorem ipsum
					</AlignTypography>
					<AlignTypography  >
						Privacy & Policy
					</AlignTypography>
					<AlignTypography >
						Terns & Conditions
					</AlignTypography>
				</Grid>
				<Grid item xs={12} sm={6} lg={3}>
					<AlignTypography textTransform={"uppercase"}>
						My account
					</AlignTypography>
					<AlignTypography >
						Initiatives and projects
					</AlignTypography>
					<AlignTypography >
						Favorite animals
					</AlignTypography>
					<AlignTypography >
						My Account
					</AlignTypography>
				</Grid>
			</ThemeProvider>
		</Grid>
	)
}
export default Footer;



