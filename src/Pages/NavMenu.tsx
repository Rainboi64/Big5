import {
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Avatar,
  styled,
  Switch,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../firebase";

export default function NavMenu() {
  const navigate = useNavigate();
  const user = getUser();
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            navigate("/home");
          }}
          sx={{ textAlign: "center" }}
        >
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            navigate("/test");
          }}
          sx={{ textAlign: "center" }}
        >
          <ListItemText primary="Test" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            navigate("/dashboard");
          }}
          sx={{ textAlign: "center" }}
        >
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            if (!user) {
              navigate("/login");
            }
          }}
          sx={{ textAlign: "center" }}
        >
          <Avatar src={user?.photoURL ? user?.photoURL : undefined}></Avatar>
          <ListItemText primary={user ? user?.displayName : "Login"} />
        </ListItemButton>
      </ListItem>

      {user ? (
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              logout().then(() => {
                navigate("/login");
              });
            }}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Sign out" />
          </ListItemButton>
        </ListItem>
      ) : null}
    </>
  );
}
