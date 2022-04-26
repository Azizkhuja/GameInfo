import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Container } from "@mui/material";
import GameListMainCard from "./GameListMainCard";
import GameListItems from "./GameListItems";

const GameList = () => {
  return (
    <div>
      <Header />
      <Box sx={{ padding: 4, backgroundColor: "#2A2E33", color: "#AAAAAA" }}>
        <Container>
          <GameListMainCard />
          <GameListItems />
          <Footer />
        </Container>
      </Box>
    </div>
  );
};

export default GameList;
