import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer/Footer';
import Monitor from './components/nutrition/Monitor';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Router>
        <DashBoard />
      </Router>
    </div>
  );
}

export default App;
