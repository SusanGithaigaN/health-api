import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer/Footer';
import Monitor from './components/nutrition/Monitor';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Keto2 from './components/nutrition/Keto2';

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path='/keto2' element={<Keto2 />} />
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
