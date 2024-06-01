import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
    const {asPath} = useRouter();
  return (
    <>
      <div className={ `navbar ${ asPath === '/' ? 'bg-gradient-to-b from-[#02a2ffde] bg-[#02A4FF] text-white shadow-md' : 'bg-white text-black shadow-md'}  px-6`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu font-extrabold  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-base font-semibold">
              <Link href="/">Home</Link>
              </li>
              <li className="text-base font-semibold">
                <Link href="/genre">Genre</Link>
              </li>
              <li className="text-base font-semibold">
                <a href="">About Us</a>
              </li>
              <li className="text-base font-semibold">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-extrabold">LyricsKu</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li className="text-base font-semibold">
              <Link href="/">Home</Link>
              </li>
              <li className="text-base font-semibold">
                <Link href="/genre">Genre</Link>
              </li>
              <li className="text-base font-semibold">
                <a href="">About Us</a>
              </li>
              <li className="text-base font-semibold">
                <a href="">Contact Us</a>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" btn-disabled btn disabled ">Temukan Lirikmu</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
