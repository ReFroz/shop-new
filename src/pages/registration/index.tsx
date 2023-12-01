import React, { useState } from "react";
import Logo from "../../img/Ico.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn, getCsrfToken } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import { api } from "~/utils/api";



export default function Login(){


  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [lastName,setLastName]=useState('')
  const [password,setPassword]=useState('')
  const [pasword2,setPassword2]=useState('')
  const [name,setName]=useState('')

  const mutation = api.auth.register.useMutation()

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const user= await mutation.mutateAsync({
      name,
      lastName,
      email,
      phone,
      password,
    })
  }
  const router = useRouter()
  return (
    <>
      <div className='flex h-[100vh]  items-center justify-center bg-[url("../img/login.png")] bg-cover bg-no-repeat font-basic text-base text-black'>
        <div className="min-h-[300px] m-5 w-[550px] bg-[#ffffffcf] p-10">
          <div className="mb-5 flex justify-between">
            <div className="flex w-full flex-col justify-between">
              <p className="text-3xl">Регистрация</p>
              <hr className="my-2 h-[7px] w-[255px] rounded bg-base" />
            </div>
            <div className="cursor-pointer">
              <Image
                onClick={() => router.push("/")}
                src={Logo}
                className="max-w-[160px]"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] " method="post">
            <input
              type="text"
              name="name"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Имя"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              type="text"
              name="second"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Фамилия"
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Почта"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="tel"
              name="tel"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Телефон"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Пароль"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <input
              type="password"
              name="password2"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Повторите пароль"
              value={pasword2}
              onChange={(e)=>setPassword2(e.target.value)}
            />
            <p className="text-xl text-[#727272]">
              <Link href={"/login"}>
                Есть аккаунт? Войдите
              </Link>
            </p>
            <input
              type="submit"
              
              className="h-[70px] w-[200px] rounded-xl bg-red-600 text-3xl text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
}
