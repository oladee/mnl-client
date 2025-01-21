import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.tsx'
import Home from './components/home/Home.tsx'
import axios from 'axios'
import NotFound from './components/NotFound.tsx'
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
  },
  {
    path : '/404',
    element : <NotFound />,
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
