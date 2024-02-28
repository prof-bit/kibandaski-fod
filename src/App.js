import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contacts";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {

  const myRef = useRef(null)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
