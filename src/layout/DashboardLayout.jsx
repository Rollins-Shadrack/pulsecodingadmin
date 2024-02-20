import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Container from '@/components/Container'

const DashboardLayout = () => {
  return (
    <div className="flex w-full main-container">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col ml-16 lg:ml-64 w-full ">
        <Header />
        <Container className="main-container">
          <Outlet />
        </Container>
      </div>
    </div>
  );
}

export default DashboardLayout