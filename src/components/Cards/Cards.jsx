import { useEffect, useState } from "react";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Typography, Box, Container, Grid, Button } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CardItem from "./Card/CardItem";

const Cards = () => {
  const matches = useMediaQuery("(max-width:900px)");
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: {
        platform: "browser",
        category: "mmorpg",
        "sort-by": "release-date",
      },
      headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setInfo(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#AAAAAA",
          marginBottom: 2,
          paddingTop: 4,
        }}
      >
        <SmartToyIcon fontSize="large" sx={{ marginRight: 1 }} />
        <Typography variant="h6">Personalized Recommendations</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {info.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CardItem
                title={item.title}
                thumbnail={item.thumbnail}
                genre={item.genre}
                game_url={item.game_url}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#23262B",
          padding: 3,
          marginTop: 5,
          marginBottom: 2,
          borderRadius: 1,
          color: "#AAAAAA",
        }}
      >
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="https://www.freetogame.com/assets/images/ftg-img.jpg"
                alt=""
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: matches ? "center" : "basline",
              }}
            >
              <Typography variant="h5">More Fun and More Rewarding!</Typography>
              <Typography variant="">
                We are Gamefy, a new gaming platform that brings all the best
                Free-to-Play Multiplayer Games and MMO Games into one place
                while rewarding gamers with free premium loot and exlusive
                perks. Plus maintain your own games library, track what you've
                played and search for what to play next!
              </Typography>
              <Box sx={{ marginTop: 1 }}>
                <Button variant="contained" sx={{ marginRight: 2 }}>
                  Join Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: "#AAAAAA", borderColor: "#AAAAAA" }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <br />
      <br />
    </Container>
  );
};

export default Cards;
