import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from './layout/MainLayout.jsx';
import Home from './template/Home.jsx';
import Content from './template/Content.jsx';
// English versions
import HomeEn from './template/en/HomeEn.jsx';
import ContentEn from './template/en/ContentEn.jsx';
import TheoryEn from './template/en/TheoryEn.jsx';
import RoleEn from './template/en/RoleEn.jsx';
import FutureEn from './template/en/FutureEn.jsx';
import ConclusionEn from './template/en/ConclusionEn.jsx';
import QuizEn from './template/en/QuizEn.jsx';
import ScrollButton from './components/Button.jsx';
import Theory from './template/LyThuyet.jsx';
import Role from './template/Vaitro.jsx';
import Future from './template/TuongLai.jsx';
import Conclusion from './template/KetLuan.jsx';
import Quiz from './template/Quiz.jsx';
import LanguageToggle from './components/LanguageToggle.jsx';
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
      {
        path: "/content/en",
        element: <ContentEn />,
      },

      //Theory pages
      {
        path: "/theory",
        element: <Theory />,
      },
      {
        path: "/theory/en",
        element: <TheoryEn />,
      },

      //Role pages
      {
        path: "/role",
        element: <Role />,
      },
      {
        path: "/role/en",
        element: <RoleEn />,
      },

      // Future pages
      {
        path: "/future",
        element: <Future />,
      },
      {
        path: "/future/en",
        element: <FutureEn />,
      },

      // Conclusion pages
      {
        path: "/conclusion",
        element: <Conclusion />,
      },
      {
        path: "/conclusion/en",
        element: <ConclusionEn />,
      },

      // Quiz page
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/quiz/en",
        element: <QuizEn />,
      },
      // English home root
      {
        path: "/en",
        element: <HomeEn />,
      },

      // Interactive Features
      {
        path: "/knowledge",
        element: <CombinedKnowledgePage />,
      },
      {
        path: "/knowledge/en",
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
