import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Monitor from './components/nutrition/Monitor';

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "#about",
        element: <About />,
      },
      {
        path: "/monitor",
        element: <Monitor />,
      },
    ],
  },
  {
    // path: "/poster/:id",
    // element: <Poster />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
