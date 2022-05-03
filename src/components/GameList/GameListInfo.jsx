import { useState, useEffect } from "react";
import axios from "axios";

import { Container, Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GameListInfoLeft from "./GameListInfoLeft";
import GameListInfoRight from "./GameListInfoRight";

const GameListInfo = () => {
  let { id } = useParams();
  const [gameInfo, setGameInfo] = useState([]);

  const getInfo = async (name) => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
      params: { id: name },
      headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setGameInfo(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
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
      <Footer />
    </>
  );
};

export default GameListInfo;
