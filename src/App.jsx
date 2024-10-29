import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/List/HomePage/Home";
import Navbar from "./components/Navbar";
import Search from "./pages/List/Search/Search";
import Detail from "./pages/detail/Detail";
import Rated from "./pages/Rated/Rated";
import Favorites from "./pages/Favorites/Favorites";
import Footer from "./components/Footer";
import Genre from "./pages/genres/genre";
import ThemeContext from "./context/ThemeContext";
import { Provider } from "react-redux";
import { useState } from "react";
import store from "./store/store";

function App() {

  const theme = useState("Light");
  return (
    <BrowserRouter>
     <ThemeContext.Provider value={theme}>
      <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Genre" element={<Genre />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/rated" element={<Rated />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </Provider>
      </ThemeContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
