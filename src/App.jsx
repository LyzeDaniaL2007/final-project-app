import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/List/HomePage/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/List/Search/Search";
import Detail from "./pages/detail/Detail";
import Rated from "./pages/Rated/Rated";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/rated" element={<Rated />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
