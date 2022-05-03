import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import IconButton from "@mui/material/IconButton";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MenuIcon from "@mui/icons-material/Menu";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1C1E22",
    },
  },
});

export default function Header() {
  const matches = useMediaQuery("(max-width:675px)");

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 6 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="primary">
          <Container>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <Link to="/">
                  <SportsEsportsIcon sx={{ fontSize: 30, marginTop: 1 }} />
                </Link>
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                sx={{
                  marginRight: 1,
                  flexGrow: 1,
                }}
              >
                <Link to="/gamelist">Gamelist</Link>
              </Typography>

              <CardGiftcardIcon
                sx={{ marginRight: 1, display: matches ? "none" : "" }}
              />
              <Button sx={{ display: matches ? "none" : "" }} color="inherit">
                Login
              </Button>
              {matches ? <MenuIcon /> : ""}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
