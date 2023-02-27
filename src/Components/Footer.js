import "./Footer.css";
import { Grid, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="vertical"></div>
      <Grid container spacing={10}>
        <Grid item sm={12} md={6} lg={6}>
          <h2>FickleFight</h2>
          <p>
            Fickle Fight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We have all your flight need in you
            online shop.
          </p>
          <div>
            <FacebookIcon className="social-icons" />
            <InstagramIcon className="social-icons" />
            <TwitterIcon className="social-icons" />
          </div>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4} lg={4}>
                <Stack>
                    <h5>Company</h5>
                    <br />
                    <button>About us</button>
                    <button>News</button>
                    <button>Careers</button>
                    <button>How we work</button>
                </Stack>
            </Grid>
            <Grid item sm={6} md={4} lg={4}>
                <Stack>
                    <h5>Support</h5>
                    <br />
                    <button>Account</button>
                    <button>Support Center</button>
                    <button>FAQ</button>
                    <button>Accessibility</button>
                </Stack>
            </Grid>
            <Grid item sm={6} md={4} lg={4}>
                <Stack>
                    <h5>More</h5>
                    <br />
                    <button>Covid Adivisory</button>
                    <button>Airline Fees</button>
                    <button>Tips</button>
                    <button>Quarantine Rules</button>
                </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
