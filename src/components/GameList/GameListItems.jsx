import { useState, useEffect } from "react";
import axios from "axios";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

import { GameFilter } from "./GameFilter";

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

const GameListItems = () => {
  const [gameLists, setGameLists] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setGameLists(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <GameFilter />
      {/* ListItems */}
      <Grid container spacing={2}>
        {gameLists.map((gameListItem) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={gameListItem.id}>
            <Card>
              <CardActionArea target="_blank">
                <CardMedia
                  component="img"
                  height="250"
                  image={gameListItem.thumbnail}
                  alt={gameListItem.title}
                />
                <CardContent>
                  <div className="gameListItems-card-parapraph">
                    <span>{gameListItem.title}</span>
                    <span>
                      <Chip label="FREE" color="primary" />
                    </span>
                  </div>
                  <br />
                  <Typography
                    variant="body2"
                    className="gameListItems-card-parapraph"
                  >
                    <span>
                      {gameListItem.platform ? "Web Browser" : "PC (Windows)"}
                    </span>
                    <span>{gameListItem.genre}</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GameListItems;
