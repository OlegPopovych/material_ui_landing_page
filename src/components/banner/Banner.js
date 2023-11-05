import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import DonateButton from './DonateButton';
import Container from '@mui/material/Container';

import ImageBanner from './ImageBanner';

import { Colors } from '../../styles';

const Banner = () => {
	return (
		<Container
			sx={{
				backgroundColor: Colors.body_bg,
				maxWidth: { xs: '100%' },
				display: "flex",
				flexDirection: 'column',
				alignItems: "center"

			}}>
			<Grid
				container spacing={4}
				justifyContent="space-around"
				noWrap
				sx={{
					flexDirection: 'row',
					maxWidth: { xs: '95%', sm: "90%" }
				}}>
				<Grid sm={7} md={7} lg={7} >
					<ImageBanner />
				</Grid>
				<Grid sm={5} md={5} lg={5}
					alignItems="flex-start"
					justifyContent="space-around"
					display={"flex"}
					flexDirection="column"
					sx={{
						width: "100%",
						marginTop: "10px",
						marginBottom: "10px"
					}}>
					<Typography
						variant="h5"
						sx={{
							paddingBottom: "10px",
							paddingTop: "10px"
						}}
						noWrap
						align='left'  >
						Our motto
					</Typography>
					<Typography
						variant="h2"
						sx={{ paddingBottom: "20px" }}
						align='left'  >
						Help animals
					</Typography>
					<Typography
						variant="h6"
						sx={{ fontSize: "14px", weight: "400", paddingBottom: "20px" }}
						align='left'  >
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corporis itaque assumenda animi, nemo porro totam qui soluta!
					</Typography>
					<DonateButton
						size="large"
						variant="contained"
						sx={{ width: "100%", borderRadius: "0px" }}>
						DONATE
					</DonateButton>
				</Grid>
			</Grid >
		</Container>

	)
}

export default Banner;

