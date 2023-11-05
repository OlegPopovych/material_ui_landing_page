import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../styles';

const DonateButton = styled(Button)(() => {
	return ({
		fontSize: 14,
		color: Colors.black,
		fontWeight: "600",
		backgroundColor: Colors.secondary,
		height: "30px"
	});
});

export default DonateButton;
