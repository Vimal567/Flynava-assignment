import "./Dashboard.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid, Stack } from "@mui/material";
import destination from "../destination.json";
import holiday from "../holiday.json";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h5 style={{ color: "#1262ae" }}>PLAN YOUR NEXT TRIP</h5>
      <div className="sub-heading">
        <span className="sub-heading">Most Popular Destinations</span>
        <button className="sub-heading">
          View all destinations
          <ArrowForwardIcon />
        </button>
      </div>
      <br />
      <div className="destination-container">
        <Grid container spacing={2}>
          {destination.map((data, index) => {
            return (
              <Grid key={index} item sm={6} md={3} lg={3}>
                <div className="destination-card">
                  <img alt="destinations" src={data.image} />
                  <div className="location-name">{data.place}</div>
                  <div className="location-from">From</div>
                  <div className="location-cost">${data.cost}</div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <br />
      <br />
      <div className="sub-heading">
        <span className="sub-heading">Recommended Holidays</span>
        <button className="sub-heading">
          View all holidays
          <ArrowForwardIcon />
        </button>
      </div>
      <br />
      <div className="destination-container">
        <Grid container spacing={2}>
          {holiday.map((data, index) => {
            return (
              <Grid key={index} item sm={6} md={3} lg={3}>
                <div className="holiday-card">
                  <img alt="destinations" src={data.image} />
                  <div
                    className="holiday-details"
                    style={{
                      border: "0.1px solid rgb(226, 226, 226)",
                      borderRadius: "0px 0px 12px 12px ",
                    }}
                  >
                    <Stack style={{paddingLeft: "1rem"}}>
                      <span style={{fontWeight: "bold"}}>{data.place}</span>
                      <span>{data.code}</span>
                    </Stack>
                    <div className="holiday-cost">${data.cost}</div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
