import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Signin from "./components/Signin";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Forgot from "./components/Forgot";
import Destinations from "./components/Destinations";
import Italy from "./components/Italy";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/FAQ" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/destinations/Italy" element={<Italy />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
