import { createTheme } from '@mui/material/styles';

export const Colors = {
	primary: '#00adb5',
	secondary: '#00c7c0',
	success: '#4caf50',
	info: '#00d5ff',
	danger: '#FF5722',
	warning: '#FFC107',
	dark: '#22414d',
	light: '#aaa',
	muted: '#abafb3',
	border: '#DDDFE1',
	inverse: '#2F3D4A',
	shaft: '#333',
	dove_gray: '#d5d5d5',
	body_bg: '#f3f6f9',
	white: '#fff',
	black: '#000',
};

// TODO: define overrides object to create theme
const overrides = createTheme({
	palette: {
		primary: {
			main: '#00adb5',
		},
		secondary: {
			main: '#00c7c0',
		},
	},
	components: {
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: Colors.primary,
					margin: '0 5%',
				},
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					margin: '4px 0',
				},
			},
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					backgroundColor: 'inherit',
					color: 'inherit',
					boxShadow: 'none',
				},
			},
		},
		MuiGrid: {
			styleOverrides: {
				root: {
					padding: "20px",
					color: Colors.dove_gray,
				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
		},
	},
});

export { overrides };
