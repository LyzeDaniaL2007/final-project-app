import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/List/HomePage/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/List/Search/Search";
import Detail from "./pages/detail/Detail";
import DetailMovie from "./pages/detail/DetailMovie";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
