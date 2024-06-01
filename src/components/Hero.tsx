import React from 'react'
import Image from 'next/image'
import ImageLyrics from '../../public/image/musik.webp'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-b from-[#02A4FF] to-[#066AFF] px-10">
      <div className="hero-content flex-col lg:flex-row">
        <Image src={ImageLyrics} alt="Lyrics Image" className="max-w-sm rounded-lg bg-base-200 shadow-2xl" />
        <div className='text-white px-7'>
          <h1 className="text-5xl font-bold">Beri nama lagu dalam hitungan detik</h1>
          <p className="py-6">Temukan Lirik Lagu dalam hitungan detik dengan mudah hanya di sini</p>
          <button className="btn btn-primary">Mulai</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
