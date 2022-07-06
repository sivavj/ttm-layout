import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { blue } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ThingsMateLogo from "../../../components/FormComponent/ThingsMateLogo";
import ForgotForm from "../Forms/ForgotForm";


const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));
const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "auto",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 0, 0, 7),
  },
}));
const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(5, 0),
}));

export default function Forgot() {
  return (
    <RootStyle>
      <HeaderStyle>
        <ThingsMateLogo />
      </HeaderStyle>
      <Container
        maxWidth="xs"
        sx={{
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
            <ContentStyle>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>
            Forgot Password
          </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1 }}>
                Please enter your user ID to recevie an email with reset
                instructions
              </Typography>

              <ForgotForm />
              
            </ContentStyle>
      </Container>
    </RootStyle>
  );
}