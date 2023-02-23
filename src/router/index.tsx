import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Index"
import Details from '../pages/Details';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/movie/:id_movie',
        element: <Details/>,
    }
])

class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;