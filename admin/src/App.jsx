import React from 'react'
import Login from './pages/Login'
import { useContext } from 'react'
import Navbar from './components/Navbar'
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {

  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App