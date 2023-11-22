import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

export default function Layout({children}) {
  return (
    <>
    <Navbar/>
    <main
    className='max-w-[1180px] mx-auto'
    >{children}</main>
    <Footer/>
    </>
  )
}
