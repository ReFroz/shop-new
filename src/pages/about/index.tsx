import React from 'react'
import Image from "next/image";
import Layout from '~/components/Layout'
import About1 from "../../img/about1.png"
import About2 from "../../img/about2.png"
import About3 from "../../img/about3.png"
export default function About() {
  return (
    <Layout  className='font-basic'>
      <div>
        <div className='flex justify-center items-center flex-col text-base font-basic text-5xl bg-[url("../img/start.png")] h-[900px] object-cover bg-no-repeat bg-cover text-center'>
            
            <h3>О нас</h3>
            <hr className="my-2 h-[7px] w-[300px] rounded bg-base-opacity max-[360px]:w-[200px]" />
            <p className='font-basic max-w-[600px]'>Nano - онлайн магазин бытовых товаров известных брендов в России</p>
        </div>
      </div>

    <div className='flex flex-col justify-center gap-8'>
    <div className='mx-auto rounded-xl h-[539px] pl-[80px] flex justify-center max-w-[1180px] shadow-xl'>
      <div className='grid items-center text-5xl grid-cols-2 justify-center'>
      <div>
        <p className='font-basic max-w-[600px]'>Магазин специализируется только на продаже бытовой техники.</p>
      </div>
      <div>
        <Image
        src={About1} className='rounded-xl h-full' alt="Хуй"/>
      </div>
      </div>
    </div>
    
    <div className='mx-auto rounded-xl h-[539px]  flex justify-center max-w-[1180px] shadow-xl'>
      <div className='grid items-center text-5xl grid-cols-2 justify-center'>
      <div>
        <Image
        src={About2} className='rounded-xl h-full' alt="Хуй"/>
      </div>
      <div>
        <p className='font-basic p-7 max-w-[600px]'>Все заказы обрабатываются в течение нескольких часов. если диспетчер подтвердил вам заказ - это гарантия того, что заказ будет доставлен..</p>
      </div>
      
      </div>
    </div>

    <div className='mx-auto rounded-xl h-[839px] p-12 flex justify-center items-center max-w-[1180px] shadow-xl'>
      <div className='grid items-center text-5xl grid-cols-1 justify-center text-center'>
      <div>
        <Image
        src={About3} className='rounded-xl h-[540px]  max-w[300px]' alt="Хуй"/>
      </div>
      
      <div>
        <p className='p-7 font-basic'>Постоянное наличие широкого ассортимента техники на наших складах, поэтому доставка может быть выполнена уже на следующий день после оформления вами заказа.</p>
      </div>
      
      </div>
    </div>
    </div>

    </Layout>
  )
}
