import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";

const mainGames = [
  {
    id: 1,
    title: "Dota 2",
    url: "https://www.freetogame.com/g/229/thumbnail.jpg",
  },
  {
    id: 2,
    title: "World of Tanks",
    url: "https://www.freetogame.com/g/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Dark Knight",
    url: "https://www.freetogame.com/g/445/thumbnail.jpg",
  },
];

const GameListMainCard = () => {
  let fullYear = new Date().getFullYear();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">
          Best Free Games for PC and Browser In {fullYear}!
        </Typography>
        <Typography variant="button">
          369 free-to-play games found in our list!
        </Typography>
      </Grid>
      {mainGames.map((mainGame) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={mainGame.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image={mainGame.url}
              alt={mainGame.title}
            />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#32383D",
                color: "#fff",
                borderRadius: 0,
              }}
            >
              <span>{mainGame.title}</span>
              <Chip label="FREE" color="primary" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GameListMainCard;
