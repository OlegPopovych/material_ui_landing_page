import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Colors } from '../../styles';

const AlignTypography = styled(Typography)(() => {
	return ({
		fontSize: "14px",
		textAlign: "left",
		color: Colors.dove_gray,
		marginTop: "5px",
		marginBottom: "5px",
		fontWeight: "400"
	});
});

export default AlignTypography;