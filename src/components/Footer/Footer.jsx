import { Typography, Box, Container, Grid, Divider } from "@mui/material";
import GithubIcon from "@mui/icons-material/Github";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const matches = useMediaQuery("(max-width:900px)");
  let fullYear = new Date().getFullYear();
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
              iPro Group, all rights reserved. All trademarks are property of
              their respective owners & {fullYear} &copy;
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <ul className="footer-bar-social">
              <li>
                <a href="https://github.com/azizkhuja" target="_blank">
                  <GithubIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="https://bit.ly/3Bx0mo3" target="_blank">
                  <LinkedInIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/aziz_ipro" target="_blank">
                  <TwitterIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
