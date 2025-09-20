import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from './layout/MainLayout.jsx';
import Home from './template/Home.jsx';
import Content from './template/Content.jsx';
import ScrollButton from './components/Button.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Home page
      {
        path: "/",
        element: <Home />,
      },

      //Content pages
      {
        path: "/content",
        element: <Content />,
      },

      //Quiz pages
      // {
      //   path: "/quiz",
      //   element: <Quiz />,
      // },


      // 404 Not Found page
      // {
      //   path: "*",
      //   element: <Error />,
      // },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ScrollButton />
  </StrictMode>,

)
