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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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
                    {routes.map((route, index) => (
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
                            color: activeTab === index ? "#ff6cb2" : "#2C2C2C", // Change color based on active tab
                            "&.Mui-selected": {
                              color: "#ff6cb2", // Selected tab color
                            },
                          }}
                        />
                      </ListItem>
                    ))}
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
                    component={Link}
                    href={route.path}
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
