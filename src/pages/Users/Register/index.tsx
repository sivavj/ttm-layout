import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import AuthSocial from "../../../components/FormComponent/AuthSocial";
import ThingsMateLogo from "../../../components/FormComponent/ThingsMateLogo";
import useResponsive from "../../../hooks/useResponsive";
import RegisterForm from "../Forms/RegisterForm";
import RegisterLogo from "../../../../public/static/image/image/registerimg.png"


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

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "auto",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
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

export default function Login() {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");

  const navigate = useNavigate();

  return (
    <RootStyle>
      <HeaderStyle>
        <ThingsMateLogo />
      </HeaderStyle>
      {mdUp && (
        <SectionStyle>
          <Typography
            variant="h4"
            sx={{ px: 5, mt: 10, mb: 5, fontWeight: 800 }}
          >
            Hi, Welcome Back
          </Typography>

          <img src={RegisterLogo} alt="register" />
        </SectionStyle>
      )}

      <Container maxWidth="sm">
        <Stack
          direction="row-reverse"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2, flex: "end" }}
        >
          {smUp && (
            <Typography variant="body2" sx={{ mt: 3 }}>
              Don’t have an account?{" "}
              <Link
                href="#"
                underline="none"
                variant="body2"
                onClick={() => navigate("/")}
                sx={{ fontWeight: 600 }}
              >
                Login
              </Link>
            </Typography>
          )}
        </Stack>

        <ContentStyle>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 900 }}>
            THE THINGSMATE LORAWAN <br></br>MANAGEMANT
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 5 }}>
            Enter your details below.
          </Typography>

          <AuthSocial />
          <RegisterForm />

          {!smUp && (
            <Typography variant="body2" sx={{ mt: 3 }}>
              Don’t have an account?{" "}
              <Link
                href="#"
                underline="none"
                variant="body2"
                onClick={() => navigate("/")}
                sx={{ fontWeight: 600 }}
              >
                Login
              </Link>
            </Typography>
          )}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}