import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "../node_modules/jquery/dist/jquery";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
