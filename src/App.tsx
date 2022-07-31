import {
  AppBar,
  Avatar,
  Box,
  Button,
  CircularProgress,
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
  styled,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { dark, light } from "@mui/material/styles/createPalette";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useCallback, useEffect, useState } from "react";
import {
  HashRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/Login";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Dashboard";
import FourZeroFour from "./Pages/FourZeroFour";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import Test from "./Pages/Test/Test";
import NavMenu from "./Pages/NavMenu";
import "./firebase";
import { isInit, uploadQuestions } from "./firebase";
import FormEditor from "./Pages/FormEditor";
import { Questions } from "./Pages/Test/Questions";

const drawerWidth = 240;

function App() {
  const [drawer, setDrawer] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mode, setMode] = useState<"dark" | "light">("light");

  const theme = createTheme({ palette: { mode } });

  useEffect(() => {
    isInit().then(() => {
      setLoaded(true);
    });
  }, [loaded, setLoaded]);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <div
      className="App"
      style={{
        background: theme.palette.background.paper,
        minHeight: "100%",
      }}
    >
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <HashRouter>
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
                <NavMenu />
                <MaterialUISwitch
                  checked={mode !== "light"}
                  onChange={(e) => {
                    setMode(mode == "dark" ? "light" : "dark");
                  }}
                />
              </Box>
            </Drawer>
          </Box>
          {loaded ? (
            <Box sx={{ paddingTop: "75px", height: "100%" }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="dashboard" element={<Results />} />
                <Route path="test" element={<Test />} />
                <Route path="results" element={<Results />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="form-editor" element={<FormEditor />} />
                <Route path="/*" element={<FourZeroFour />} />
              </Routes>
            </Box>
          ) : (
            <Box className="centered">
              <CircularProgress />
            </Box>
          )}
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
