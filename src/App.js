import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home/Home";
import InputData from "./components/inputData/InputData";
import LightrPage from "./components/lighter/lightrPage/LightrPage";
import './css/App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lighter/:id" element={<LightrPage />} />
          <Route path="/datadevcreate" element={<InputData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
