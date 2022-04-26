import { Container, Grid, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GameListInfoLeft from "./GameListInfoLeft";
import GameListInfoRight from "./GameListInfoRight";

const GameListInfo = () => {
  let { id } = useParams();
  const [gameInfo, setGameInfo] = useState([]);

  const getInfo = async (name) => {
    const data = await fetch(`https://www.freetogame.com/api/game?id=${name}`);
    const response = await data.json();
    setGameInfo(response);
  };

  useEffect(() => {
    getInfo(id);
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <Box sx={{ padding: 4, backgroundColor: "#2A2E33", color: "#AAAAAA" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <GameListInfoLeft gameInfoLeft={gameInfo} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <GameListInfoRight gameInfoRight={gameInfo} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default GameListInfo;
