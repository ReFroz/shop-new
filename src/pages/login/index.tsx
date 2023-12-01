import React, { FormEventHandler, useState } from "react";
import Logo from "../../img/Ico.png";
import Git from "../../img/git.png";
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
import { useSearchParams } from "next/navigation";

export default function Login({ }) {
  
  const router = useRouter();
  const searchParams= useSearchParams()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    signIn("credentials", { email, password, callbackUrl: "/" });
  };
  return (
    <>
      <div className='flex h-[100vh] items-center justify-center bg-[url("../img/login.png")] bg-cover bg-no-repeat font-basic text-base text-black'>
        <div className="m-5 min-h-[300px] w-[550px] bg-[#ffffffcf] p-10">
          <div className="mb-5 flex justify-between">
            <div className="flex w-full flex-col justify-between">
              <p className="text-3xl">Вход</p>
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
              type="email"
              name="email"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Почта"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              className="rounded-xl border-4 border-solid border-base px-3 py-4 text-3xl"
              placeholder="Пароль"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
            <p className="text-xl text-[#727272]">Забыли пароль?</p>
            <p className="text-xl text-[#727272]">
              <Link href={"/registration"}>
                Нет аккаунта? Зарегестрируйтесь
              </Link>
            </p>
            <div className="flex justify-between">
              <input
                type="submit"
                className="h-[70px] w-[200px] rounded-xl bg-red-600 text-3xl text-white"
              ></input>

              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
