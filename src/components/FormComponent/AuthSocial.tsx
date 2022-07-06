// material
import { Stack, Button, Divider, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { blue, red } from '@mui/material/colors';
// component

// ----------------------------------------------------------------------

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <GoogleIcon sx={{color:"#DF3E30"}}/>
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <FacebookIcon sx={{color:"#1877F2" }}/>
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <TwitterIcon sx={{color:"#1C9CEA"}}/>
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}


