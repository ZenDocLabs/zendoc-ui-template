import React from 'react';
import { Box, Container } from '@mui/material';
import { AppToolbar } from './AppToolbar';
import { BurgerMenu } from './BurgerMenu';
import { useEnv } from '../hooks/useEnv';
import { useTranslation } from 'react-i18next';

export const AppContent = (): React.JSX.Element => {
  const { appName } = useEnv();
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppToolbar />
      <Box sx={{ display: 'flex' }}>
        <BurgerMenu />

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, padding: 3 }}>
          <Container maxWidth="lg">
            <h1>{t('welcome', { appName })}</h1>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
