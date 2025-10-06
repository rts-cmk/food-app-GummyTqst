import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Orders from "./pages/Orders"
import Favorites from "./pages/Favorites"
import Layout from "./components/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/orders", element: <Orders /> },
      { path: "/favorites", element: <Favorites /> },
    ],
  },

])


function App() {
  
  return <RouterProvider router={router} />
}

export default App
