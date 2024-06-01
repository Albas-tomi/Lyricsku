/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { LiriksDummyData } from "../../../public/dummyData/liriks";

const GenreRock = () => {
  const [isOpen, setIsOpen] = React.useState(0);
    // Fungsi untuk menghasilkan markup HTML dari lirik
    const generateHTMLFromLyrics = (lyrics:any) => {
      return { __html: lyrics }; // menggunakan dangerouslySetInnerHTML
    };
  return (
    <div className="px-6 py-3 ">
      <h1 className="text-4xl text-center font-extrabold my-3">Genre Rock</h1>
      <section className="flex flex-col gap-3 relative">
      {LiriksDummyData.filter((lirik) => lirik.genre === "Rock").map((lirik, idx) => (
          <div key={idx} className="collapse collapse-plus bg-base-200">
          <input
            type="radio"
            name="my-accordion-3"
            onClick={() => setIsOpen(isOpen === idx+1 ? 0 : idx+1)}
            checked={isOpen === idx+1 && true}
          />
          <div className="collapse-title text-xl font-medium">
            {lirik.judul}-{lirik.band}
          </div>
                          <div className="collapse-content" dangerouslySetInnerHTML={generateHTMLFromLyrics(lirik.lirik)} />

        </div>
      ))}
      </section>
    </div>
  );
};

export default GenreRock;
