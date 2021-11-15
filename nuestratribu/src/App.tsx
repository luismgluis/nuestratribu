import React from "react";
import "./App.css";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import ThemeConfig from "./Themes/ThemeConfig";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
