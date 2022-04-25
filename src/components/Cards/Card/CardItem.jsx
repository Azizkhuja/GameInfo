import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  CardActionArea,
} from "@mui/material";

const CardItem = ({ title, thumbnail, genre, game_url }) => {
  return (
    <Card sx={{ padding: 1, marginBottom: 2 }}>
      <CardActionArea href={game_url} target="_blank">
        <CardMedia
          component="img"
          height="250"
          image={thumbnail}
          alt={thumbnail}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Chip label={genre} variant="outlined" sx={{ marginRight: 1 }} />
      <Button variant="contained" target="_blank" href={game_url}>
        Free
      </Button>
    </Card>
  );
};

export default CardItem;
