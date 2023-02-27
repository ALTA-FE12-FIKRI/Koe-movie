import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { useSelector } from "react-redux";

import Home from "../pages/Index"
import Details from '../pages/Details';
import Favorite from "../pages/Favorite";

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id_movie" element={<Details/>} />
        <Route path="/favorite" element={<Favorite/>} />
      </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App;