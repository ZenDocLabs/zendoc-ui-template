import { AppBar, Toolbar, IconButton, InputBase, Box } from '@mui/material';
import { GitHub, Search, DarkMode, LightMode } from '@mui/icons-material';
import { useThemeMode } from '../context/ThemeContext';
import logo from './../assets/logo.png';
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
            sx={{
              ml: 1,
              flex: 1,
              color: 'white',
              border: '1px solid #fff',
              borderRadius: 1,
              padding: '0 10px',
            }}
            placeholder="Search..."
            startAdornment={<Search sx={{ color: 'white' }} />}
          />
        </Box>

        <IconButton onClick={toggleTheme} color="inherit" sx={{ position: 'relative' }}>
          <Box sx={{ position: 'relative', width: 24, height: 24 }}>
            <LightMode
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: isDarkMode ? 0 : 1,
                transform: isDarkMode ? 'translateX(30px)' : 'translateX(0)',
                transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
              }}
            />
            <DarkMode
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: isDarkMode ? 1 : 0,
                transform: isDarkMode ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
              }}
            />
          </Box>
        </IconButton>

        <IconButton color="inherit" href={gitLink} target="_blank">
          <GitHub />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
