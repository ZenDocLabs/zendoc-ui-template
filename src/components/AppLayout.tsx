import React from 'react';
import { Box } from '@mui/material';
import { AppToolbar } from './AppToolbar';
import { DocSidebar } from './DocSidebar';
import { BaseDoc, FuncDoc, StructDoc } from '../doc/doc';
import { useDoc } from '../context/DocContext';
import { isFuncDoc, isStructDoc } from '../doc/guard';
import { AppContent } from './AppContent';

export const AppLayout = (): React.JSX.Element => {
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
        <AppContent />
      </Box>
    </Box>
  );
};
  
