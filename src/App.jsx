import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end >Home Page </NavLink>
        <NavLink to="/About">About Page</NavLink>
        <NavLink to="/Products">Products Page</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}