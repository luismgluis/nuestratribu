import "./Login.scss";
import React, { useCallback, useState } from "react";
import {
  Grid,
  CssBaseline,
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useBreackpoints from "../../hooks/useBreackpoints";
import Api from "../../api/Api";
import { useNavigate } from "react-router";

const TAG = "LOGIN";
type LoginProps = {
  prop1?: any;
};
const Login: React.FC<LoginProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const navigation = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    pass: "",
    pass2: "",
    email: "",
  });

  const loginAction = useCallback(
    (e?: React.FormEvent<HTMLFormElement>) => {
      // e?.preventDefault();

      // if (form.email === "" || !form.email.includes("@")) {
      //   alert.error("Email invalido");
      //   return;
      // }
      // if (form.firstName === "") {
      //   alert.error("Nombre invalido");
      //   return;
      // }
      // if (form.lastName === "") {
      //   alert.error("Usuario invalido");
      //   return;
      // }
      // if (form.pass === "") {
      //   alert.error("Clave invalida");
      //   return;
      // }
      // if (form.pass !== form.pass2) {
      //   alert.error("Claves diferentes");
      //   return;
      // }
      Api.database.user
        .createUserWithEmail(
          form.firstName,
          form.lastName,
          form.email,
          form.pass
        )
        .then((data) => {
          // alert.info("Creado con exito");
          setForm({
            firstName: "",
            lastName: "",
            pass2: "",
            pass: "",
            email: "",
          });
          navigation("/login");
        })
        .catch((err) => {
          console.log(err);
          // alert.error("Creacion fallida", err.code);
        });

      //  login(form.user, form.pass);
    },
    [form]
  );

  return (
    <div className="Login">
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Crear Cuenta
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="fisrtName"
                label="Nombre"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.currentTarget.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lastName"
                value={form.lastName}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.currentTarget.value })
                }
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electronico"
                name="email"
                autoComplete="email"
                autoFocus
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.currentTarget.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={form.pass}
                onChange={(e) =>
                  setForm({ ...form, pass: e.currentTarget.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña (Repetir)"
                type="password"
                id="password"
                autoComplete="current-password"
                value={form.pass2}
                onChange={(e) =>
                  setForm({ ...form, pass2: e.currentTarget.value })
                }
              />

              <Box sx={{ px: 3 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => loginAction()}
                >
                  Crear Cuenta
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
