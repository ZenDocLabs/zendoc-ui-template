import { Box, Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useEnv } from "../hooks/useEnv";
import { Outlet } from "react-router-dom";

export const AppContent = (): React.JSX.Element => {
    const { appName } = useEnv();
    const { t } = useTranslation();

    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
          <Container maxWidth="lg">
            <h1>{t('welcome', { appName })}</h1>
            <Outlet />
          </Container>
        </Box>
    )
}