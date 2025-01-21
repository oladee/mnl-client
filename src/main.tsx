import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.tsx'
import Home from './components/home/Home.tsx'
import axios from 'axios'
axios.defaults.baseURL = 'https://mariteamapi.denateonlineservice.com'
const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path : '/',
        element : <Home/>,
      },

    ]
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
