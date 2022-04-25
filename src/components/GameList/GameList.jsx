import Header from "../Header/Header";
import { Box, Container } from "@mui/material";
import GameListMainCard from "./GameListMainCard";
import GameListItems from "./GameListItems";

const GameList = () => {
  return (
    <div>
      <Header />
      <Box sx={{ padding: 4, backgroundColor: "#1C1E22", color: "#AAAAAA" }}>
        <Container>
          <GameListMainCard />
          <GameListItems />
        </Container>
      </Box>
    </div>
  );
};

export default GameList;
