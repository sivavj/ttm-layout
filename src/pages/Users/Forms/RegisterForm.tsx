import { Button, IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Iconify from '../../../components/FormComponent/Iconify';

interface FormType {
    userId: any;
    names: string;
    email: string;
    Password: any;
    ConfirmPassword: any;
  }
export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
      } = useForm<FormType>({ delayError: 3000, mode: "onChange" });
      const onSubmit = async (data: FormType) => {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ConfirmPassword: data.ConfirmPassword,
            Password: data.Password,
            names: data.names,
            email: data.email,
            userId: data.userId,
          })
        );
        alert(`${JSON.stringify(data)}Your successfully register`);
        navigate("/");
        reset();
      };
      const Password = useRef({});
    
      Password.current = watch("Password", "");
    
      const [showPassword, setShowPassword] = useState(false);
      const handleShowPassword = () => {
        setShowPassword((show) => !show);
      };
    
      const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Stack
      spacing={3}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ my: 2 }}
    >
      <TextField
        // margin="normal"
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
        // margin="normal"
        fullWidth
        id="signup-names"
        label="Name *"
        autoComplete="names"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("names", {
          required: "Name is required.",
        })}
      />
    </Stack>

    <TextField
      // margin="normal"
      fullWidth
      id="signup-email"
      label="Email Address *"
      autoComplete="email"
      error={!!errors.email}
      helperText={errors.email?.message}
      {...register("email", {
        required: "Email is required.",
        pattern: {
          value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
          message:
            "Email must have one'@',one'.' and use no special characters",
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
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&`~\/,."';:]).*$/,
          message:
            "Password must have at least 8 characters (ex:India@$/;)",
        },
      })}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword} edge="end">
              <Iconify
                icon={
                  showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                }
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    <TextField
      margin="normal"
      fullWidth
      label="ConfirmPassword *"
      id="side-card-password"
      autoComplete="current-password"
      type={showPassword ? "text" : "password"}
      error={errors.ConfirmPassword}
      helperText={errors.ConfirmPassword?.message}
      {...register("ConfirmPassword", {
        minLength: 8,
        maxLength: 20,
        validate: (value: {}) =>
          value === Password.current || "The Passwords do not match",
      })}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword} edge="end">
              <Iconify
                icon={
                  showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                }
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign Up
    </Button>
  </form>
  )
}
