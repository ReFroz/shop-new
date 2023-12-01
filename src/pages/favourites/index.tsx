import React from 'react'
import Layout from '~/components/Layout'
import { api } from '~/utils/api'




export default function Favourites() {
  const {data:posts}=api.favourit.getLike.useQuery()
  return (
    <>
    <Layout>
      <div className='mx-auto flex flex-col justify-center p-5 gap-5 max-w-[1180px]'>
        {posts?.map((item)=>(
          <div className='min-h-[270px] w-full grid p-5 shadow-xl rounded-xl  border-solid border-base border' key={item.postsID}>
            <div className='flex items-center gap-10 justify-between'>
              <img src={item.posts.imgs[0]?.altTitle} className='w-[150px] '/>
              <div className=' max-w-[500px]'>
                <p className="text-2xl">{item.posts.title}</p>
                <p className="text-lg">{item.posts.property}</p>
              </div>              
              <p>{item.posts.price} Р</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
    </>
  )
}

