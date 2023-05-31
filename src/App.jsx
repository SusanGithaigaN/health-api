import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/nav/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
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
        path: "/about",
        element: <About />,
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
