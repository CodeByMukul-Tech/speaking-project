import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './routers/home';
import About from './routers/about';
import Dashboard from './routers/dashboard';
import Navbar from './routers/Navbar';
import Paramscomp from './routers/componets';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element:<div>
      <Navbar />
      <Home />
    </div>,
  },
  {
    path: '/about',
    element: <div>
      <Navbar />
      <About />
    </div>  },
  {
    path: '/dashboard',
    element: <div>
      <Navbar />
      <Dashboard />
      </div>,
  },
  {
    path: '/downship/:id',
    element: <div>
      <Navbar />
      {/* <Dashboard /> */}
      <Paramscomp/>
      </div>,
  },
]);

function App() {
  return (
    <Fragment>
      {/* <h1>Hello</h1> */}
      {/* RouterProvider renders the defined routes */}
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
