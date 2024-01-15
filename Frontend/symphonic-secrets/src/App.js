import * as React from 'react';
import { Route, Routes, useRoutes } from "react-router-dom";
import './App.css';
import { LandingPage } from './Pages/main';

function App() {
let element = useRoutes([
  {
    path: "/",
    element: <LandingPage/>,
  }
]);

  return element;
}

export default App;
