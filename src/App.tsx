import {
  AppBar,
  Avatar,
  Box,
  Button,
  createTheme,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { dark, light } from "@mui/material/styles/createPalette";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useCallback, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/Login";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Dashboard";
import FourZeroFour from "./Pages/FourZeroFour";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import Test from "./Pages/Test/Test";

const theme = createTheme({ palette: light });
const drawerWidth = 240;

function App() {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div
      className="App"
      style={{ background: theme.palette.background.default }}
    >
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              sx={{ color: "inherit" }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              The Big 5 Assesment
            </Typography>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer
            variant="temporary"
            open={drawer}
            onClose={toggleDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Box onClick={toggleDrawer} sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                The Big 5 Assesment
              </Typography>
              <Divider />
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "space-apart",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary="Test" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>

                <Divider />
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <Avatar />
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Box>
        <Box sx={{ paddingTop: "48px" }}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Test />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="test" element={<Test />} />
              <Route path="result" element={<Results />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="/*" element={<FourZeroFour />} />
            </Routes>
          </HashRouter>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
