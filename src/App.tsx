import {
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/Login";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Dashboard";
import FourZeroFour from "./Pages/FourZeroFour";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import Test from "./Pages/Test/Test";

const theme = createTheme({ palette: dark });

function App() {
  return (
    <div
      className="App"
      style={{ background: theme.palette.background.default }}
    >
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="test" element={<Test />} />
            <Route path="result" element={<Results />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="/*" element={<FourZeroFour />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
