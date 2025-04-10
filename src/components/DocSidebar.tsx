import React, { useState } from 'react';
import { 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Collapse, 
  Box,
  Drawer,
  Toolbar,
  Divider,
  Typography
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ClassIcon from '@mui/icons-material/Class';
import FunctionsIcon from '@mui/icons-material/Functions';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import { BaseDoc, FileDoc, FuncDoc, StructDoc } from '../doc/doc';

const drawerWidth = 280;

interface PackageTreeProps {
  packageDocs: Record<string, FileDoc[]>;
  onItemClick?: (
    item: BaseDoc | FuncDoc | StructDoc, 
    type: string, 
    packageName: string, 
    filename: string
  ) => void;
}

const PackageTree: React.FC<PackageTreeProps> = ({ packageDocs, onItemClick }) => {
  const [openPackages, setOpenPackages] = useState<Record<string, boolean>>({});
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handlePackageClick = (packageName: string): void => {
    setOpenPackages((prev) => ({
      ...prev,
      [packageName]: !prev[packageName]
    }));
  };

  const handleItemClick = (
    item: BaseDoc | FuncDoc | StructDoc, 
    type: string, 
    packageName: string, 
    filename: string
  ): void => {
    setSelectedItem(`${packageName}-${filename}-${item.name}`);
    if (onItemClick) {
      onItemClick(item, type, packageName, filename);
    }
  };

  return (
    <List component="nav" sx={{ width: '100%' }}>
      {Object.entries(packageDocs).map(([packageName, files]) => (
        <React.Fragment key={packageName}>
          <ListItemButton 
            onClick={() => handlePackageClick(packageName)}
            sx={{ 
              backgroundColor: openPackages[packageName] ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)'
              }
            }}
          >
            <ListItemIcon>
              {openPackages[packageName] ? <FolderOpenIcon color="primary" /> : <FolderIcon color="primary" />}
            </ListItemIcon>
            <ListItemText 
              primary={
                <Typography variant="body1" fontWeight="medium">
                  {packageName}
                </Typography>
              } 
            />
            {openPackages[packageName] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openPackages[packageName]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {files.map((file) => {
                if (!file.docs || file.docs.length === 0) return null;
                
                return file.docs.map((docItem) => {
                  const isStruct = docItem.type === 'struct';
                  const isFunction = docItem.type === 'function';
                  const itemId = `${packageName}-${file.filename}-${docItem.name}`;
                  
                  return (
                    <ListItemButton
                      key={`${file.filename}-${docItem.name}`}
                      sx={{ 
                        pl: 4,
                        backgroundColor: selectedItem === itemId ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                        '&:hover': {
                          backgroundColor: 'rgba(25, 118, 210, 0.12)'
                        }
                      }}
                      onClick={() => handleItemClick(docItem, docItem.type, packageName, file.filename)}
                    >
                      <ListItemIcon>
                        {isStruct ? <ClassIcon color="secondary" /> : 
                         isFunction ? <FunctionsIcon color="success" /> : 
                         <CodeIcon color="action" />}
                      </ListItemIcon>
                      <ListItemText 
                        primary={docItem.name} 
                        secondary={file.filename}
                        slotProps={{
                          primary: {
                            fontSize: 14,
                            fontWeight: selectedItem === itemId ? 'medium' : 'regular'
                          },
                          secondary: {
                            fontSize: 12
                          }
                        }}
                      />
                    </ListItemButton>
                  );
                });
              })}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

interface DocSidebarProps {
  packageDocs: Record<string, FileDoc[]>;
  onItemSelect?: (
    item: BaseDoc | FuncDoc | StructDoc, 
    type: string, 
    packageName: string, 
    filename: string
  ) => void;
}

export const DocSidebar: React.FC<DocSidebarProps> = ({ packageDocs, onItemSelect }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'relative',
          overflowY: 'auto',
          height: 'calc(100vh - 64px)',
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Project Documentation
        </Typography>
      </Toolbar>
      <Divider />
      <Box sx={{ overflow: 'auto' }}>
        <PackageTree 
          packageDocs={packageDocs} 
          onItemClick={(item, type, packageName, filename) => {
            if (onItemSelect) {
              onItemSelect(item, type, packageName, filename);
            }
          }}
        />
      </Box>
    </Drawer>
  );
};
