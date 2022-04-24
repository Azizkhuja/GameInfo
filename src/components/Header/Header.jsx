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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1C1E22",
    },
  },
});

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
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
              <Typography variant="h6" component="div" sx={{ marginRight: 1 }}>
                Gamefy
              </Typography>
              <Typography variant="h6" component="div" sx={{ marginRight: 1 }}>
                Gamelist
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Specail
              </Typography>
              <SearchIcon sx={{ marginRight: 1 }} />
              <CardGiftcardIcon sx={{ marginRight: 1 }} />
              <Button color="inherit">Login</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
