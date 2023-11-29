import React, { useEffect } from 'react'
import Logo404 from "../img/404.svg"
import Layout from '~/components/Layout'
import Image from "next/image";
import { useRouter } from 'next/dist/client/components/navigation';
import { redirect } from 'next/navigation'
export default function Custom404() {
  
 

  const router = useRouter()
  {setTimeout(()=>router.push("../"),3000)}
  return (

    <Layout className='mx-auto max-w-[1180px] grid justify-center text-center'>
      <Image src={Logo404} className='max-h-[400px]'/>
      <p className='font-basic mt-5'>Такой страницы не существует, вернитесь на главную страницу</p>
      <p></p>

    </Layout>
    
  )
}
