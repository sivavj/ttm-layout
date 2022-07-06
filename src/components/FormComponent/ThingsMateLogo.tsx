import {Box} from "@mui/material";
import Logo from '../../../public/static/image/logo/ThingsMateLogo.jpeg'
import React from "react";
export default function ThingsMateLogo() {
   
  return (
    <Box >
      <img src={Logo} alt="Logo" width="36px" height="36px" />
    </Box>
  );
}
