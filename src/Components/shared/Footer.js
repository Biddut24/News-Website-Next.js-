import Link from "next/link";
import React from "react";

import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {

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
    <div className="bg-black p-10">
      <div className="flex justify-center space-x-4 text-3xl ">
        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
          <FaFacebookF className="text-white transition" />
        </Link>
        <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
          <FaYoutube className="text-white transition" />
        </Link>
        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
          <FaTwitter className="text-white transition" />
        </Link>
        <Link href="https://wa.me/" target="_blank" aria-label="WhatsApp">
          <FaWhatsapp className="text-white transition" />
        </Link>
        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <FaLinkedinIn className="text-white transition" />
        </Link>
      </div>

      <ul className="flex gap-5 justify-center my-5"
      >
        {navItems.map((item, i) => ( <li key={i}>  {" "}   <Link href={item.path} className="text-white">    {" "}  {item.route}</Link>{" "}  </li> ))}
      </ul>

      <p className="text-gray-700 text-center">@2025 The News Portal. Design by Developer Biddut Hasan</p>
    </div>
  );
};

export default Footer;
