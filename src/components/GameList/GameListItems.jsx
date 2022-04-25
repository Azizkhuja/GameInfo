import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const GameListItems = () => {
  return (
    <>
      {/* Filter */}
      <Grid container sx={{ marginTop: "2rem" }}>
        <Grid item xs={6} sm={3}>
          <span>Platform: </span>
          <a className="game-list-items-anchor">
            {" "}
            All Platforms <KeyboardArrowDownIcon />
          </a>
        </Grid>

        <Grid item xs={6} sm={3}>
          <span>Genre/Tag: </span>
          <a>
            {" "}
            All Genres <KeyboardArrowDownIcon />
          </a>
        </Grid>
        <Grid item xs={6} sm={3}>
          <span>Sort By: </span>
          <a>
            {" "}
            Popularity <KeyboardArrowDownIcon />
          </a>
        </Grid>
        <Grid item xs={6} sm={3}>
          <a>
            Advanced Filters
            <KeyboardArrowDownIcon />
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      {/* ListItems */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardActionArea target="_blank">
              <CardMedia component="img" height="250" image="" alt="" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  test
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default GameListItems;
