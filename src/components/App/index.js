import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Global, theme } from "../../assets/styles";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home";
import Movie from "../../pages/Movie";
import Seats from "../../pages/Seats";
import Success from "../../pages/Success";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/seats/:id" element={<Seats />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
