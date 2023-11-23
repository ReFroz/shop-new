import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
    <Navbar/>
    <main
    className='max-w-[1180px] mx-auto px-5'
    >{children}</main>
    <Footer/>
    </>
  )
}
