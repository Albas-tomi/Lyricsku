import Hero from "@/components/Hero";
import albums from "../../public/image/albums.jpg";
import Image from "next/image";
import ImageCover from '../../public/image/musikemaig.jpeg'
import { LiriksDummyData } from "../../public/dummyData/liriks";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-screen bg-[#F2F2F7] flex justify-center items-center">
        <Image
          src={albums}
          alt="Lyrics Image"
          className=" rounded-lg bg-base-200 shadow-2xl"
        />
      </div>
      <div className="h-screen  flex flex-col justify-center gap-3 items-center">
        <h2 className="font-bold text-4xl">
          Lagu teratas yang ditemukan di seluruh dunia saat ini
        </h2>
        <p>
          Lihat siapa yang berhasil masuk daftar, untuk lagu yang paling sering
          di-Shazam di seluruh dunia
        </p>
        <div className="carousel carousel-center max-w-6xl p-4 space-x-4 bg-neutral rounded-box">
          {LiriksDummyData.map((lirik, idx) => (
            
          <div key={idx} className="carousel-item ">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <Image
                  src={ImageCover}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{lirik.genre}</h2>
                <p>{lirik.judul}</p>
                <p>{lirik.band}</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </div>
          ))}
      
        </div>
      </div>
    </>
  );
}
