import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from './layout/MainLayout.jsx';
import Home from './template/Home.jsx';
import Content from './template/Content.jsx';
import ScrollButton from './components/Button.jsx';
import Theory from './template/LyThuyet.jsx';
import Role from './template/Vaitro.jsx';
import Future from './template/TuongLai.jsx';
import Conclusion from './template/KetLuan.jsx';
import Quiz from './template/Quiz.jsx';
import TimelinePage from './pages/TimelinePage.jsx';
import KnowledgeMapPage from './pages/KnowledgeMapPage.jsx';
import CombinedKnowledgePage from './pages/CombinedKnowledgePage.jsx';
import { ReadingProgressProvider } from './context/ReadingProgressContext.jsx';

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

      //Theory pages
      {
        path: "/theory",
        element: <Theory />,
      },

      //Role pages
      {
        path: "/role",
        element: <Role />,
      },

      // Future pages
      {
        path: "/future",
        element: <Future />,
      },

      // Conclusion pages
      {
        path: "/conclusion",
        element: <Conclusion />,
      },

      // Quiz page
      {
        path: "/quiz",
        element: <Quiz />,
      },

      // Interactive Features
      {
        path: "/knowledge",
        element: <CombinedKnowledgePage />,
      },

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
    <ReadingProgressProvider>
      <RouterProvider router={router} />
      <ScrollButton />
    </ReadingProgressProvider>
  </StrictMode>,

)
