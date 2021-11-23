import React from 'react'
import Image from 'next/image'
// import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
    {/* <Image
      className={styles}
    /> */}
     <Header/>
     <main>{children}</main> 
     {/* <Footer/> */}
    </Container>
  )
}
