import React from "react";
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



export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: {
      providers,
      csrfToken
    },
  }
}

export default function Login({providers, csrfToken }){
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
          <form className="flex flex-col gap-[20px] " method="post">
            <input
              type="text"
              name="login"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Логин"
            />
            <input
              type="email"
              name="email"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Почта"
            />
            <input
              type="password"
              name="password"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Пароль"
            />
            <input
              type="password"
              name="password2"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Повторите пароль"
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
