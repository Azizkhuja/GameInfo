import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  TextField,
} from "@mui/material";

import { GameFilter } from "./GameFilter";

const GameListItems = () => {
  const [gameLists, setGameLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      <TextField
        sx={{ marginBottom: 1, backgroundColor: "#c1c1c1", padding: 1 }}
        fullWidth
        color="error"
        variant="standard"
        className="gamelist-serach-input"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {/* ListItems */}
      <Grid container spacing={2}>
        {gameLists
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((gameListItem) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={gameListItem.id}>
              <Card>
                <Link to={"/gamelist/" + gameListItem.id}>
                  <CardActionArea target="_blank">
                    <CardMedia
                      component="img"
                      height="250"
                      image={gameListItem.thumbnail}
                      alt={gameListItem.title}
                    />
                    <CardContent sx={{ backgroundColor: "#32383D" }}>
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
                          {gameListItem.platform
                            ? "Web Browser"
                            : "PC (Windows)"}
                        </span>
                        <span>{gameListItem.genre}</span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default GameListItems;
