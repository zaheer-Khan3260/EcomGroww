import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import NavBar from './Components/Navbar/Navbar.jsx'
import Services from './Components/Services/Services.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/Services",
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
