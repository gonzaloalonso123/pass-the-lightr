import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home/Home";
import InputData from "./components/inputData/InputData";
import LightrPage2 from "./components/lighter/lightrPage/LightrPage2";
import './css/App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lighter/:id" element={<LightrPage2 />} />
          <Route path="/datadevcreate" element={<InputData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
