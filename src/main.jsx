import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from './layout/MainLayout.jsx';
import Home from './template/Home.jsx';
import Content from './template/Content.jsx';
import StrategicRole from './template/LyThuyet.jsx';
import PrimaryTask from './template/Vaitro.jsx';
import Forces from './template/TuongLai.jsx';
import Foundation from './template/KetLuan.jsx';
import Methods from './template/Methods.jsx';
import Applications from './template/Applications.jsx';
import Front from './template/Front.jsx';
import Resources from './template/Resources.jsx';

// English versions
import HomeEn from './template/en/HomeEn.jsx';
import ContentEn from './template/en/ContentEn.jsx';
import StrategicRoleEn from './template/en/TheoryEn.jsx';
import PrimaryTaskEn from './template/en/RoleEn.jsx';
import ForcesEn from './template/en/FutureEn.jsx';
import FoundationEn from './template/en/ConclusionEn.jsx';
import MethodsEn from './template/en/MethodsEn.jsx';
import ApplicationsEn from './template/en/ApplicationsEn.jsx';
import FrontEn from './template/en/FrontEn.jsx';
import ResourcesEn from './template/en/ResourcesEn.jsx';
import QuizEn from './template/en/QuizEn.jsx';
import ScrollButton from './components/Button.jsx';
import Quiz from './template/Quiz.jsx';
import LanguageToggle from './components/LanguageToggle.jsx';
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

      // Overview hub
      { path: "/overview", element: <Content /> },
      { path: "/overview/en", element: <ContentEn /> },

      // Core content (Ho Chi Minh Thought on Great National Unity)
      { path: "/strategic-role", element: <StrategicRole /> },
      { path: "/strategic-role/en", element: <StrategicRoleEn /> },

      { path: "/primary-task", element: <PrimaryTask /> },
      { path: "/primary-task/en", element: <PrimaryTaskEn /> },

      { path: "/forces", element: <Forces /> },
      { path: "/forces/en", element: <ForcesEn /> },

      { path: "/foundation", element: <Foundation /> },
      { path: "/foundation/en", element: <FoundationEn /> },

      // Extended sections
      { path: "/methods", element: <Methods /> },
      { path: "/methods/en", element: <MethodsEn /> },

      { path: "/applications", element: <Applications /> },
      { path: "/applications/en", element: <ApplicationsEn /> },

      { path: "/front", element: <Front /> },
      { path: "/front/en", element: <FrontEn /> },

      { path: "/resources", element: <Resources /> },
      { path: "/resources/en", element: <ResourcesEn /> },

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
