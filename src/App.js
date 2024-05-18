import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "../node_modules/jquery/dist/jquery";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import "./pages/Styles.css"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
