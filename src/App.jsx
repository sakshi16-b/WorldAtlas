import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import "./App.css"

import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Country } from "./Pages/Country";
import { About } from "./Pages/About";
import ErrorPage from "./Pages/ErrrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";



const router = createBrowserRouter([
  {
  path:"/",
  element:<AppLayout/>,
  errorElement:<ErrorPage/>,
  children:[
     {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element:<About />,
  },
  {
    path: "/country",
    element:<Country />,
  },
  {
    path: "/country/:id",
    element:<CountryDetails/>
  },
  {
    path:"/contact",
    element:<Contact />,
  },
]}
])

const App = () => {

  return <RouterProvider router={router}></RouterProvider>
}
export default App;