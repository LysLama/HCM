import Header from '../components/Header'
import ChatBot from '../components/ChatBot'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <Header />
        <Outlet />
      <ChatBot />
    </>
  )
}

export default MainLayout