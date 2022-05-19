import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import About from "./pages/About";
import Appartment from "./pages/Appartment";
import Error from "./pages/Error";
import Composants from "./pages/Composants";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Composants />} />
        <Route path="about" element={<About />} />
        <Route path="appartment" element={<Appartment />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
