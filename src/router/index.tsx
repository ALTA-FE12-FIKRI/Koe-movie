import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { useSelector } from "react-redux";

import Home from "../pages/Index"
import Details from '../pages/Details';

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id_movie" element={<Details/>} />
      </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App;