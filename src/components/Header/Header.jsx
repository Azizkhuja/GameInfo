import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1C1E22",
    },
  },
});

export default function ButtonAppBar() {
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
                sx={{ mr: 2 }}
              >
                <SportsEsportsIcon fontSize="large" />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ marginRight: 1, flexGrow: matches ? 1 : "" }}
              >
                Gamefy
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ marginRight: 1, display: matches ? "none" : "" }}
              >
                Gamelist
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: matches ? "none" : "" }}
              >
                Specail
              </Typography>
              <SearchIcon
                sx={{ marginRight: 1, display: matches ? "none" : "" }}
              />
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
