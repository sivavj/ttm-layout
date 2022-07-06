import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Link,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Iconify from "../../../components/FormComponent/Iconify";

interface FormType {
  userId: string;
  Password: any;
}
export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({ delayError: 3000, mode: "onChange" });

  const onSubmit = (data: FormType) => {
    const userData = JSON.parse(localStorage.getItem("auth")!);
    if (userData) {
      if (
        userData.Password === data.Password &&
        userData.userId === data.userId
      ) {
        navigate("/overview");
      } else {
        alert("UserId or Password not matching");
      }
    }
    reset();
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        fullWidth
        label="User ID *"
        id="side-card-user ID"
        error={!!errors.userId}
        helperText={errors.userId?.message}
        {...register("userId", {
          maxLength: 20,
          required: "User ID is required",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[0-9]).*$/,
            message:
              "User ID must have less then 20 character include number(ex:india1947)",
          },
        })}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Password *"
        type={showPassword ? "text" : "password"}
        id="side-card-Password"
        autoComplete="current-Password"
        error={!!errors.Password}
        helperText={errors.Password?.message}
        {...register("Password", {
          minLength: 8,
          maxLength: 20,
          required: "Password is required.",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&`~\/,."';:]).*$/,
            message: "Password must have at least 8 characters (ex:India@$/;)",
          },
        })}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword} edge="end">
                <Iconify
                  icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
        </FormGroup>

        <Link
          href="#"
          underline="none"
          variant="body2"
          onClick={() => navigate("/forgot-password")}
          sx={{ fontWeight: 600 }}
        >
          Forgot Password?
        </Link>
      </Stack>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Login
      </Button>
    </form>
  );
}
