import * as React from 'react';
import { Route, Routes, useRoutes } from "react-router-dom";
import './App.css';
import { Game1, LandingPage, LoginPage, MainPage } from './Pages/main';

function App() {
// let element = useRoutes([
//   {
//     path: "/",
//     element: <LandingPage/>,
//   }
// ]);

  // return element;
  return (
 <div>
  <Routes>
  <Route exact path="/" element={<LandingPage/>} />
  <Route exact path="/login" element={<LoginPage/>} />
  <Route exact path="/dashboard/:id" element={<MainPage/>} />
  <Route exact path="/game1" element={<Game1/>} />
 </Routes>
 </div>

  )
}

export default App;
