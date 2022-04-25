import { useEffect, useState } from "react";
import { Typography, Box, Container, Grid, Button } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import axios from "axios";
import CardItem from "./Card/CardItem";
import useMediaQuery from "@mui/material/useMediaQuery";

// const test = [
//   {
//     id: 472,
//     title: "Jade Goddess",
//     thumbnail: "https://www.freetogame.com/g/472/thumbnail.jpg",
//     short_description:
//       "Jade Goddess is a free-to-play, browser based MMO inspired by Eastern mythology.",
//     game_url: "https://www.freetogame.com/open/jade-goddess",
//     genre: "MMORPG",
//     platform: "Web Browser",
//     publisher: "101XP",
//     developer: "101XP",
//     release_date: "2020-06-15",
//     freetogame_profile_url: "https://www.freetogame.com/jade-goddess",
//   },
//   {
//     id: 458,
//     title: "League of Angels - Heaven's Fury",
//     thumbnail: "https://www.freetogame.com/g/458/thumbnail.jpg",
//     short_description:
//       "A free-to-play, browser-based fantasy online action RPG based loosely on Western mythology!",
//     game_url: "https://www.freetogame.com/open/league-of-angels-heavens-fury",
//     genre: "MMORPG",
//     platform: "Web Browser",
//     publisher: "Gtarcade",
//     developer: "Yoozoo Games",
//     release_date: "2020-01-09",
//     freetogame_profile_url:
//       "https://www.freetogame.com/league-of-angels-heavens-fury",
//   },
//   {
//     id: 468,
//     title: "Firestone Idle RPG",
//     thumbnail: "https://www.freetogame.com/g/468/thumbnail.jpg",
//     short_description:
//       "Set in the fantasy world of Alandria, Firestone is an idle RPG in which players are tasked with building the best possible party of heroes and using them to defeat the undead and orcs that plague the world.",
//     game_url: "https://www.freetogame.com/open/firestone-idle-rpg",
//     genre: "Strategy",
//     platform: "Web Browser",
//     publisher: "Holyday Studios",
//     developer: "Holyday Studios",
//     release_date: "2019-09-26",
//     freetogame_profile_url: "https://www.freetogame.com/firestone-idle-rpg",
//   },
// ];

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
            <Grid item xs={12} sm={6} md={4}>
              <CardItem
                key={item.id}
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
      <br />
    </Container>
  );
};

export default Cards;
