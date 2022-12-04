import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginModal from "./modal/LoginModal";

export default function TopBar() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Kanban Board by Oneal
        </Typography>

        <LoginModal />

        <Button
          href="#"
          variant="contained"
          color="error"
          sx={{ my: 1, mx: 1.5 }}
        >
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  );
}
