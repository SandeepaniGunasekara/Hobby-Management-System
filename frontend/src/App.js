import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const routes = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/users", element: <ProtectedRoute><Users/></ProtectedRoute> },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
