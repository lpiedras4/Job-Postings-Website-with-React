import React from 'react'
import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet/> {/* Puts the current page content and the child components defined on the router*/}
    </>
  )
}

export default MainLayout