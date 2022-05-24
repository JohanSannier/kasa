import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Reset.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Appartment from "./pages/Appartment";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/logement/:appartmentId" element={<Appartment />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
