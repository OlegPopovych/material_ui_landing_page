import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import renderMenuTree from './renderMenuData';
import { overrides } from '../../styles';

const SidebarMenu = () => {
  return (
    <ThemeProvider theme={overrides}>
      <Container sx={{ paddingTop: '5%' }}>{renderMenuTree()}</Container>
    </ThemeProvider>
  );
};

export default SidebarMenu;
