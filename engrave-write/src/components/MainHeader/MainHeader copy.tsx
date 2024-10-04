"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const routes = [
    { label: "Home", path: "/Home" },
    { label: "About Us", path: "/About" },
    { label: "IT Services", path: "/ItServices" },
    { label: "Signage", path: "/Signage" },
    { label: "Results", path: "/Results" },
    { label: "Contact", path: "/Contact" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
      <Toolbar>
        {/* First Part: Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            <img
              src="./assets/EngraveIcons/Logo.svg" // Replace with your logo path
              alt="Logo"
              style={{ height: "50px", cursor: "pointer" }}
            />
          </Link>
        </Typography>

        {/* Conditional Rendering for Medium Screens */}
        {isMediumScreen ? (
          <>
            {/* Button for opening drawer */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer Menu */}
            <SwipeableDrawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <List>
                {routes.map((route) => (
                  <ListItem
                    key={route.label}
                    component={Link}
                    href={route.path}
                  >
                    <ListItemText primary={route.label} />
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
          </>
        ) : (
          // Second Part: Navigation Menus for larger screens
          <Tabs>
            {routes.map((route) => (
              <Tab
                key={route.label}
                label={route.label}
                component={Link}
                href={route.path}
              />
            ))}
          </Tabs>
        )}

        {/* Third Part: Button */}
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginLeft: "auto" }}
          component={Link}
          href="/estimate"
        >
          Free Estimate
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
