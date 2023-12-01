import Link from 'next/link'
import React from 'react'
import Layout from '~/components/Layout'
export default function Profile() {
  return (
    <Layout>
        <div className='mx-auto max-w-[1180px] p-4'>
          
          <p className="text-3xl">Профиль</p>
          <hr className="my-2 h-[7px] w-[300px] rounded bg-base" />

          <div className='flex flex-row gap-[200px] p-20'>
            <div className='flex flex-col gap-3'>
              <Link href="/profil"><p>Заказы</p></Link>
              <Link href="/profil"><p>Мои корзины</p></Link>
              <Link href="/profil"><p>Мои заказы</p></Link>
              <Link href="/profil"><p>Сравнения товаров</p></Link>
              <Link href="/profil"><p>Электронные чеки</p></Link>
              <br/>
              <Link href="/profil"><p>Баланс</p></Link>
              <Link href="/profil"><p>Мои карты</p></Link>
              <Link href="/profil"><p>Сохранённые карты</p></Link>
            </div>
            <div className='max-w-[400px] p-2 border-solid '>
                <p className="text-2xl">Мои финансы</p> 
                <div className='flex gap-[20px] flex-col justify-center shadow-xl p-5 rounded-xl items-center'>
                  <p className="text-2xl">Привяжите карту</p> 
                  <p className="text-xl">Оплачивайте свои покупки быстро и без подтвержеия смс</p> 
                  <button className='p-5 mt-2 rounded-xl bg-red-600 text-white '>Привязать</button>
                </div>
                <div className='max-w-[400px] mt-[40px] '>
                <p className="text-2xl">Активыные заказы</p> 
                <div className='bg-base w-[400px] rounded-xl shadow-xl h-[250px]'>
                  
                </div>
                </div>
            </div>
          </div>
        </div>

    </Layout>
  )
}
