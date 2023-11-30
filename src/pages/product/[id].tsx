import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { useState } from "react";
import Fav from "../../img/Favourites.svg";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const { data: allPost } = api.posts.get1post.useQuery(
    Number(router.query.id),
  );
  if (allPost?.length == 0) router.push("/404");

  const [selectImage, setSelectImage] = useState("");

  return (
    <>
      <Layout className="font-basic">
        <div className="mx-auto max-w-[1180px]">
          {allPost?.map((item) => (
            <>
              <div className="mb-3 ml-5 text-3xl" key={item.id}>
                {item.title}
              </div>

              <div className="boredr-solid mx-3 flex flex-row items-center  justify-center gap-[15px] rounded-xl border-t-2 border-red-600 p-7 py-10 shadow-xl max-[860px]:flex-col">
                <div className="flex max-[860px]:flex-col max-[860px]:items-center">
                  <div className="ml-3 mt-3 flex max-w-[50px] flex-col items-center justify-center gap-3 max-[860px]:flex-row ">
                    {item?.imgs
                      .map((img) => (
                        <img
                          onClick={() => setSelectImage(img.altTitle)}
                          className="max-w-[50px] cursor-pointer"
                          src={img.altTitle}
                        />
                      ))
                      .slice(0, 8)}
                  </div>
                  <img
                    className="min-h-[500px] min-w-[500px] p-10"
                    src={selectImage ? selectImage : item.imgs[0]?.altTitle}
                  />
                </div>
                <div className="flex w-full flex-col justify-center rounded-xl p-5 shadow-lg max-[860px]:items-center">
                  <div className="flex flex-wrap  items-center gap-[10px]">
                    {item.title}

                    <img
                      src={item.brands[0]?.img}
                      className="h-[28px] w-[100px]"
                    />
                  </div>

                  <div className="r mt-6 flex flex-wrap items-center gap-[20px]">
                    <div className="text-2xl">
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                      ₽
                    </div>
                    <button className="rounded border-2 border-solid border-base bg-white   p-2">
                      <Image src={Fav} alt="Картинка"/>
                    </button>
                    <button className="rounded-xl bg-red-600 p-3 px-10 text-2xl text-white  ">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </Layout>
    </>
  );
}
