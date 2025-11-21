import React from "react";
import Header from "./Header";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import Link from "next/link";

import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    {
      route: "Home",
      path: "/",
    },
    {
      route: "About",
      path: "/about",
    },
    {
      route: "Category",
      path: "/category",
    },
    {
      route: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      <Header></Header>

      <div className="navbar bg-black shadow-sm px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn mr-7 bg-white btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item, i) => (
                <li key={i}>
                  {" "}
                  <Link href={item.path} className="text-Black">
                    {" "}
                    {item.route}
                  </Link>{" "}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image className="h-5 w-30" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, i) => (
              <li key={i}>
                {" "}
                <Link href={item.path} className="text-white">
                  {" "}
                  {item.route}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="hidden md:flex space-x-4 text-3xl ">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white transition" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube className="text-white transition" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter className="text-white transition" />
            </Link>
            <Link href="https://wa.me/" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp className="text-white transition" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white transition" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;