import Typography from '@mui/material/Typography';
import { Colors } from '../../styles';
import "@fontsource/allison";
import { ThemeProvider } from '@mui/material/styles';
import { overrides } from '../../styles';

const Logo = () => {
	return (
		<ThemeProvider theme={overrides}>
			<Typography
				noWrap
				align='center'
				color={overrides.palette.secondary.main}
				sx={{
					fontSize: "70px",
					fontFamily: "Allison"
				}} >
				Cats & friends
			</Typography>
		</ThemeProvider>
	)
}
export default Logo;
