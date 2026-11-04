import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" >Home Page </Link>
        <Link to="/About">About Page</Link>
        <Link to="/Products">Products Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}