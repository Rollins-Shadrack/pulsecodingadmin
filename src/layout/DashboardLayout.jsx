import React from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Container from '@/components/Container'

const DashboardLayout = () => {
  return (
    <div className="flex w-full  ">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col ml-16 lg:ml-64 w-full ">
        <Header />
        <Container >
          <Outlet />
        </Container>
      </div>
    </div>
  );
}

export default DashboardLayout