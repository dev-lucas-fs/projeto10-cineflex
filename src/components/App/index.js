import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global } from "../../assets/styles";
import Home from "../../pages/Home";

export default function App() {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
