// import './App.css'
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Navbar from './components/nav/Navbar';
// import Footer from './components/Footer/Footer';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// } from "react-router-dom";
// import Monitor from './components/nutrition/Monitor';

// const DashBoard = () => {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <DashBoard />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "#about",
//         element: <About />,
//       },
//       {
//         path: "/monitor",
//         element: <Monitor />,
//       },
//     ],
//   },
//    {
//         path: "/monitor",
//         element: <Monitor />,
//       },
// ]);

// function App() {
//   return (
//     <div className="app">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Monitor from './components/nutrition/Monitor';

// const DashBoard = () => {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          {/* <Route path="/" element={<DashBoard />}> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/monitor" element={<Monitor />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </Router>
    </div >
  );
}

export default App;
