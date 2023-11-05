import Gallery from '../Gallery';
import { Container, Typography } from '@mui/material';

const Content = () => {
	return (
		<Container sx={{ marginTop: "30px", marginBottom: "15px", maxWidth: { xs: '95%', sm: "90%" } }}>
			<Typography variant="h4" align="center" >
				Waiting for their owners
			</Typography>
			<Gallery />
		</Container>
	);
};

export default Content;
