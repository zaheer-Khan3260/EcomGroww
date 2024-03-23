import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import NavBar from './Components/Navbar/Navbar.jsx'
import Services from './Components/Services/Services.jsx'


const router = createBrowserRouter([
  {
    path:"/EcomGroww/",
    element:<Layout/>,
    children: [
      {
        path:"/EcomGroww/",
        element: <Home/>
      },
      {
        path:"/EcomGroww//Services",
        element: <Services/>
      },
     
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('navBar')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
