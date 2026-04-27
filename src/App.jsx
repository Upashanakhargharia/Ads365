import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import AI from "./pages/AI";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ai" element={<AI />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="locations" element={<Locations />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}