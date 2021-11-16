import React from "react";
import "./App.css";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import ThemeConfig from "./Themes/ThemeConfig";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import LoginCreate from "./components/Login/LoginCreate";
import Edit from "./components/Edit/Edit";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route
            path="/homep"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route path="/CreateAccount" element={<LoginCreate />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
