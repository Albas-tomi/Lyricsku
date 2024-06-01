/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

import GenreRock from "./genreRock";
import GenreHiphop from "./genreHiphop";
import { GenreMusikDummy } from "../../../public/dummyData/genre";
import GenreRNB from "./genreRNB";
import Link from "next/link";

const GenrePage = () => {
  const { genre } = useRouter().query;
  return (
    <>
      {genre?.includes("RNB") ? (
        <GenreRNB />
      ) : genre?.includes("Rock") ? (
        <GenreRock />
      ) : genre?.includes("HipHop") ? (
        <GenreHiphop />
      ) : genre?.includes("") ? (
        <>Genre Kosong</>
      ) : (
        <>
          <div className="flex flex-col gap-3 p-6">
            {
GenreMusikDummy.map((genre, idx) => (
            <div key={idx} className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
              <img  src={genre.image_url} alt="Genre Image" className="max-w-36 w-[28rem] h-60 object-cover  rounded-lg bg-base-200 shadow-2xl" />
           
              </figure>
              <div className="card-body">
                <h2 className="card-title font-extrabold text-xl">{genre.genre}.</h2>
                <p>{genre.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <Link href={`/genre/${genre.genre}`}>Lagu</Link></button>
                </div>
              </div>
            </div>

))
            }
          
          </div>
        </>
      )}
    </>
  );
};

export default GenrePage;
