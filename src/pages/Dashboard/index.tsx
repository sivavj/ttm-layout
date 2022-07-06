import React from "react";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Devices from "./Devices";
import Thermostat from "./Thermostat";

export default function Dashboard() {
  return (
    <div>
      <Helmet>
        <title>Devices - TTM</title>
      </Helmet>
      <Grid>
        <Grid item>
          <Thermostat />
        </Grid>
        <Grid item sx={{ mt: 4 }}>
          <Devices />
        </Grid>
      </Grid>
    </div>
  );
}
