import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormType {
  userId: string;
  Password: any;
  Passwords: any;
}
export default function ForgotForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormType>({ delayError: 3000, mode: "onChange" });
  const onSubmit = (data: FormType) => {
    const userData = JSON.parse(localStorage.getItem("auth")!);
    alert(userData.Password);
    if (userData) {
      if (userData.userId === data.userId) {
        navigate("/edit");
      } else {
        alert("userId is not matching");
      }
    }
  };
  const navigate = useNavigate();
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="side-card-userId"
        label="userId"
        autoComplete="userId"
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

      <Stack
        direction="row-reverse"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2, flex: "end" }}
      >
        <Button
          size="medium"
          type="submit"
          variant="contained"
          sx={{
            pr: 2,
            boxShadow: 5,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "rgb(0, 171, 85)",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            p: 1,
            m: 1,
          }}
        >
          Send
        </Button>

        <Button size="medium" onClick={() => navigate("/")}>
          cancel
        </Button>
      </Stack>
    </Box>
  );
}
