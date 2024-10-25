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
  Stack,
  Box,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [submenu, setSubmenu] = useState<null | string>(null); // To track which submenu is open
  const [drawerSubmenuOpen, setDrawerSubmenuOpen] = useState<{
    [key: string]: boolean;
  }>({
    ITServices: false,
    Signage: false,
  });

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    menu: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSubmenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenu(null);
  };

  const handleDrawerSubmenuToggle = (menu: string) => {
    setDrawerSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const routes = [
    { label: "Home", path: "/Home" },
    { label: "About Us", path: "/About" },
    { label: "IT Services", path: "/ItServices" },
    { label: "Signage", path: "/Signage" },
    { label: "Results", path: "/Results" },
    { label: "Contact", path: "/Contact" },
  ];

  const itServicesSubmenu = [
    { label: "Web Design", path: "/ItServices/WebDesign" },
    { label: "Web Development", path: "/ItServices/WebDevelopment" },
  ];

  const signageSubmenu = [
    { label: "Digital Printing", path: "/Signage/DigitalPrinting" },
    { label: "Laser Cutting", path: "/Signage/LaserCuttingEngraving" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: { sx: 2, sm: 2, md: 4, lg: 6 },
        paddingRight: { sx: 2, sm: 2, md: 4, lg: 6 },
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            width: "100%",
          }}
        >
          <Stack
            sx={{
              flex: 0.2,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              gap: 4,
            }}
          >
            {isMediumScreen && (
              <IconButton
                edge="end"
                sx={{ color: "#2C2C2C" }}
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={{ width: "40px", height: "40px" }} />
              </IconButton>
            )}

            <Typography>
              <img
                src="./assets/EngraveIcons/Logo.svg"
                alt="Logo"
                style={{
                  height: "66px",
                  width: "177.29px",
                  cursor: "pointer",
                  objectFit: "contain", // Ensures the aspect ratio is preserved
                }}
              />
            </Typography>
          </Stack>

          {/* Conditional Rendering for Medium Screens */}
          <Stack sx={{ flex: 0.7, alignItems: "center" }}>
            {isMediumScreen ? (
              <Stack>
                {/* Drawer Menu */}
                <SwipeableDrawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  <List>
                    {routes.map((route) => {
                      if (route.label === "IT Services") {
                        return (
                          <React.Fragment key={route.label}>
                            {/* @ts-ignore */}
                            <ListItem
                              button // Make it a button to prevent default link behavior
                              onClick={() =>
                                handleDrawerSubmenuToggle("ITServices")
                              }
                            >
                              <ListItemText
                                primary={route.label}
                                sx={{
                                  fontSize: "20px",
                                  fontWeight: "400",
                                  lineHeight: "30px",
                                  fontFamily: "Rubik",
                                  textTransform: "capitalize",
                                  color: "#2C2C2C",
                                }}
                              />
                              {drawerSubmenuOpen.ITServices ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )}
                            </ListItem>
                            <Collapse
                              in={drawerSubmenuOpen.ITServices}
                              timeout="auto"
                              unmountOnExit
                            >
                              <List component="div" disablePadding>
                                {itServicesSubmenu.map((item) => (
                                  <ListItem
                                    key={item.label}
                                    component={Link}
                                    href={item.path}
                                    sx={{
                                      padding: 1,
                                      paddingLeft: 2,
                                      width: "100%",
                                      fontSize: 18,
                                      backgroundColor: "#fff", // Change background color
                                      "&:hover": {
                                        backgroundColor: "rgba(255,59,153, .2)", // Change background on hover
                                      },
                                    }}
                                  >
                                    <ListItemText primary={item.label} />
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          </React.Fragment>
                        );
                      } else if (route.label === "Signage") {
                        return (
                          <React.Fragment key={route.label}>
                            {/* @ts-ignore */}
                            <ListItem
                              button // Make it a button to prevent default link behavior
                              onClick={() =>
                                handleDrawerSubmenuToggle("Signage")
                              }
                            >
                              <ListItemText
                                primary={route.label}
                                sx={{
                                  fontSize: "20px",
                                  fontWeight: "400",
                                  lineHeight: "30px",
                                  fontFamily: "Rubik",
                                  textTransform: "capitalize",
                                  color: "#2C2C2C",
                                }}
                              />
                              {drawerSubmenuOpen.Signage ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )}
                            </ListItem>
                            <Collapse
                              in={drawerSubmenuOpen.Signage}
                              timeout="auto"
                              unmountOnExit
                            >
                              <List component="div" disablePadding>
                                {signageSubmenu.map((item) => (
                                  <ListItem
                                    key={item.label}
                                    component={Link}
                                    href={item.path}
                                    sx={{
                                      padding: 1,
                                      paddingLeft: 2,
                                      width: "100%",
                                      fontSize: 18,
                                      backgroundColor: "#fff", // Change background color
                                      "&:hover": {
                                        backgroundColor: "rgba(255,59,153, .2)", // Change background on hover
                                      },
                                    }}
                                  >
                                    <ListItemText primary={item.label} />
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          </React.Fragment>
                        );
                      } else {
                        return (
                          <ListItem
                            key={route.label}
                            component={Link}
                            href={route.path}
                          >
                            <ListItemText
                              primary={route.label}
                              sx={{
                                fontSize: "20px",
                                fontWeight: "400",
                                lineHeight: "30px",
                                fontFamily: "Rubik",
                                textTransform: "capitalize",
                                color: "#2C2C2C",
                              }}
                            />
                          </ListItem>
                        );
                      }
                    })}
                  </List>
                </SwipeableDrawer>
              </Stack>
            ) : (
              // Second Part: Navigation Menus for larger screens
              <Tabs
                value={activeTab}
                onChange={(event, newValue) => setActiveTab(newValue)}
                indicatorColor="primary"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#ff6cb2", // Custom color for the indicator
                  },
                }}
              >
                {routes.map((route, index) => (
                  <Tab
                    key={route.label}
                    label={route.label}
                    component={
                      route.label === "IT Services" || route.label === "Signage"
                        ? "div"
                        : Link
                    }
                    href={route.path}
                    onClick={
                      route.label === "IT Services"
                        ? (event) => handleMenuOpen(event, "IT Services")
                        : route.label === "Signage"
                        ? (event) => handleMenuOpen(event, "Signage")
                        : undefined
                    }
                    sx={{
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "30px",
                      fontFamily: "Rubik",
                      textTransform: "capitalize",
                      color: activeTab === index ? "#ff6cb2" : "#2C2C2C", // Change color based on active state
                      "&.Mui-selected": {
                        color: "#ff6cb2", // Color when the tab is selected
                      },
                      "&:hover": {
                        color: "#ff6cb2", // Color on hover
                      },
                    }}
                  />
                ))}

                {/* Submenu for IT Services */}
                <Menu
                  anchorEl={anchorEl}
                  open={submenu === "IT Services"}
                  onClose={handleMenuClose}
                  sx={{ borderRadius: 4 }}
                >
                  {itServicesSubmenu.map((item) => (
                    <MenuItem
                      key={item.label}
                      component={Link}
                      href={item.path}
                      onClick={handleMenuClose}
                      sx={{
                        padding: 2,
                        width: "100%",
                        fontSize: 18,
                        backgroundColor: "#fff", // Change background color
                        "&:hover": {
                          backgroundColor: "rgba(255,59,153, .2)", // Change background on hover
                        },
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>

                {/* Submenu for Signage */}
                <Menu
                  anchorEl={anchorEl}
                  open={submenu === "Signage"}
                  onClose={handleMenuClose}
                  sx={{ borderRadius: 4 }}
                >
                  {signageSubmenu.map((item) => (
                    <MenuItem
                      key={item.label}
                      component={Link}
                      href={item.path}
                      onClick={handleMenuClose}
                      sx={{
                        padding: 2,
                        width: "100%",
                        fontSize: 18,
                        backgroundColor: "#fff", // Change background color
                        "&:hover": {
                          backgroundColor: "rgba(255,59,153, .2)", // Change background on hover
                        },
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Tabs>
            )}
          </Stack>

          {/* Third Part: Button (2 parts) */}
          <Stack
            sx={{
              flex: 0.1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                width: 161,
                height: 50,
                backgroundColor: "#00007D",
                borderRadius: 2,
              }}
              variant="contained"
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "400",
                  color: "#fff",
                  fontFamily: "rubik",
                }}
              >
                03 9793 1187
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
