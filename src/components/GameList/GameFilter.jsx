import { Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const GameFilter = () => {
  return (
    <>
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
    </>
  );
};
