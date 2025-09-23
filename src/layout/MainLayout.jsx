import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatBot from '../components/ChatBot'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
      <ChatBot />
    </>
  )
}

export default MainLayout