import React from 'react';
import { Box } from '@mui/material';
import { AppToolbar } from './AppToolbar';
import { DocSidebar } from './DocSidebar';
import { BaseDoc, FuncDoc, StructDoc } from '../doc/doc';
import { useDoc } from '../context/DocContext';
import { AppContent } from './AppContent';
import { useNavigate } from 'react-router-dom';

export const AppLayout = (): React.JSX.Element => {
  const { doc } = useDoc();
  const navigate = useNavigate();

  const handleItemSelect = (
    item: BaseDoc | FuncDoc | StructDoc, 
    type: string, 
    packageName: string, 
    filename: string
  ): void => {
    navigate(`/${filename}/${item.name}`)
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppToolbar />
      <Box sx={{ display: 'flex', flexGrow: 1, mt: 4 }}>
        <DocSidebar 
          packageDocs={doc.packageDocs} 
          onItemSelect={handleItemSelect}
        />
        <AppContent />
      </Box>
    </Box>
  );
};
  
