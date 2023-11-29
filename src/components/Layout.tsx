import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children, className=''}) {
  return (
    <>
    <Navbar/>
    <main className={className}>{children}</main>
    <Footer/>
    </>
  )
}
