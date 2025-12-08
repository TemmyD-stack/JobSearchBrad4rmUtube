import React from 'react'
import Navbar from '../component/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default MainLayout