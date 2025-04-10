import React from 'react';
import { Box, Container } from '@mui/material';
import { AppToolbar } from './AppToolbar';
import { DocSidebar } from './DocSidebar';
import { useEnv } from '../hooks/useEnv';
import { useTranslation } from 'react-i18next';
import { BaseDoc, FuncDoc, StructDoc } from '../doc/doc';
import { useDoc } from '../context/DocContext';
import { isFuncDoc, isStructDoc } from '../doc/guard';

export const AppContent = (): React.JSX.Element => {
  const { appName } = useEnv();
  const { t } = useTranslation();
  const { doc } = useDoc();

  const handleItemSelect = (
    item: BaseDoc | FuncDoc | StructDoc, 
    type: string, 
    packageName: string, 
    filename: string
  ): void => {
    console.log('Selected item:', item);
    console.log('Type:', type);
    console.log('Package:', packageName);
    console.log('File:', filename);
    if (isFuncDoc(item)) {
      console.log('Function params:', item.params);
      console.log('Function return:', item.return);
    } else if (isStructDoc(item)) {
      console.log('Struct fields:', item.fields);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppToolbar />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <DocSidebar 
          packageDocs={doc.packageDocs} 
          onItemSelect={handleItemSelect}
        />
        <Box sx={{ flexGrow: 1, padding: 3 }}>
          <Container maxWidth="lg">
            <h1>{t('welcome', { appName })}</h1>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
  
