import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import "../../firebase";
import { openGoogleSignIn, signInWithEmail } from "../../firebase";
import { useState } from "react";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">The Big 5 Assesment</Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    signInWithEmail(email, password).then(() => {
      navigate("/test");
    });
  };

  const handleLoginWithGoogle = () => {
    openGoogleSignIn().then(() => {
      navigate("/test");
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
            onClick={handleLoginWithGoogle}
          >
            Continue with Google!
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <NavLink to="/reset-password">Forgot password?</NavLink>
            </Grid>
            <Grid item xs>
              <NavLink to="/signup">Sign Up</NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
