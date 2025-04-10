import { AppBar, Toolbar, IconButton, InputBase, Box } from '@mui/material';
import { GitHub, Search, DarkMode, LightMode } from '@mui/icons-material';
import { useThemeMode } from '../context/ThemeContext';
import logo from "./../assets/logo.png"
import { useEnv } from '../hooks/useEnv';

const Logo = () => <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />;

export const AppToolbar = (): React.JSX.Element => {
  const { toggleTheme, mode } = useThemeMode();
  const { gitLink } = useEnv();
  const isDarkMode = mode === 'dark';

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <InputBase
            sx={{ ml: 1, flex: 1, color: 'white', border: '1px solid #fff', borderRadius: 1, padding: '0 10px' }}
            placeholder="Search..."
            startAdornment={<Search sx={{ color: 'white' }} />}
          />
        </Box>

        <IconButton onClick={toggleTheme} color="inherit">
          {isDarkMode ? <LightMode /> : <DarkMode />}
        </IconButton>

        <IconButton color="inherit" href={gitLink} target="_blank">
          <GitHub />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
