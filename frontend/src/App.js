import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  const routes = createBrowserRouter([
    {path: '/login', element: <Login/>},
  ]);

  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
