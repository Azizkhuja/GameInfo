import { Typography, Box, Container, Grid, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <Box
      sx={{ padding: 6, color: "#fff", backgroundColor: "#1C1E22" }}
      className="footer-bar"
    >
      <Container>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={3}>
            <ul>
              <li>About</li>
              <li>API</li>
              <li>Contact US</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <ul>
              <li>Help</li>
              <li>Support & Bugs</li>
              <li>Feature Request</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <ul>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Terms of Use</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3} sx={{ display: matches ? "none" : "" }}>
            <img
              src="https://www.freetogame.com/assets/images/logo-footer.png"
              alt="footer-logo"
            />
          </Grid>
        </Grid>
        <Divider light sx={{ borderColor: "#c1c1c1" }} />
        {/* Info-media */}
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={8}>
            <Typography variant="body2" sx={{ color: "#AAAAAA" }}>
              © 2022 Digiwalls Media, all rights reserved. All trademarks are
              property of their respective owners.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <ul className="footer-bar-social">
              <li>
                <FacebookIcon fontSize="large" />
              </li>
              <li>
                <TwitterIcon fontSize="large" />
              </li>
              <li>
                <RssFeedIcon fontSize="large" />
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
