import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemText, Collapse, ListItemIcon, ListItemButton } from '@mui/material';
import { Menu as MenuIcon, ExpandLess, ExpandMore, Home, Info, ContactMail } from '@mui/icons-material';

export const BurgerMenu = (): React.JSX.Element => {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<{ [key: string]: boolean }>({
    home: false,
    about: false,
  });

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          {/* Home Menu */}
          <ListItemButton component="button" onClick={() => toggleSubMenu('home')}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
            {openSubMenu.home ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSubMenu.home} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton component="button" sx={{ pl: 4 }}>
                <ListItemText primary="Submenu 1" />
              </ListItemButton>
              <ListItemButton component="button" sx={{ pl: 4 }}>
                <ListItemText primary="Submenu 2" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* About Menu */}
          <ListItemButton component="button" onClick={() => toggleSubMenu('about')}>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="About" />
            {openSubMenu.about ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSubMenu.about} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton component="button" sx={{ pl: 4 }}>
                <ListItemText primary="Submenu 1" />
              </ListItemButton>
              <ListItemButton component="button" sx={{ pl: 4 }}>
                <ListItemText primary="Submenu 2" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Contact Menu */}
          <ListItemButton component="button">
            <ListItemIcon>
              <ContactMail />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};
