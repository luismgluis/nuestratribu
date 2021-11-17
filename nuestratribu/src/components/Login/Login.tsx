import "./Login.scss";
import React, { useCallback, useEffect, useState } from "react";
import { Copyright } from "@mui/icons-material";
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
import { useCurrentUser } from "../../hooks/currentUser";
import { useNavigate } from "react-router";
import Api from "../../api/Api";

const TAG = "LOGIN";
type LoginProps = {
  prop1?: any;
};
const Login: React.FC<LoginProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", pass: "" });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const me = useCurrentUser();

  console.log(TAG, me);
  useEffect(() => {
    if (!me.isEmpty()) {
      navigate("/home");
    }
  }, [me, navigate]);

  const loginAction = useCallback(() => {
    Api.app.loginWithEmail(form.email, form.pass);
  }, [form]);

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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} src="">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inicia Sesión
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
                id="email"
                label="Email Address"
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
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={form.pass}
                onChange={(e) =>
                  setForm({ ...form, pass: e.currentTarget.value })
                }
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuerdame"
              />
              <Box sx={{ mx: "25%" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => loginAction()}
                >
                  Ingresar
                </Button>
              </Box>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Olvidé mi contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/CreateAccount" variant="body2">
                    {"No tengo una cuenta"}
                  </Link>
                </Grid>
              </Grid>
              <Box sx={{ mt: 5 }}>
                <Typography variant="caption" color="primary">
                  <Copyright /> Nuestra Tribu 2021
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
