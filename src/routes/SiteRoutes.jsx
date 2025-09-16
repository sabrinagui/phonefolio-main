import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import TrafficResults from "../pages/TrafficResults";
import PageNotFound from "../pages/PageNotFound";
import Contact from "../pages/Contact";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/trafego-pago" element={<TrafficResults />} />
      <Route path="/contato" element={<Contact/>} />
      
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
