import { FiSearch, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";


import Dropdown from "@/components/Dropdown";

import Link from "next/link";


const languageOptions = [
  "ENGLISH",
  "HINDI",
  "TELEGU",
  "TAMIL",
  "MARATHI"
];

export default function Header() {
  return (
    <header className="header">

 
      <div className="header__top">

      <div className="header_logo">
        <img src="/next.svg" alt="website logo" className="logo" />
      </div>

      <div className="header_text">
        <Link href="/">
            <h1 className="main-heading">MY STORE</h1>
        </Link>
      </div>

    <div className="header_functions">
        <FiSearch />
        <FiHeart />
        <FiShoppingBag />
        <FiUser className="icon-user" />

        <div className="icon-language">
            <Dropdown label="Sort" options={languageOptions} />
        </div>
    </div>

      </div>


      <nav className="header__nav">
        <span><Link href="/shop">SHOP</Link></span>
        <span><Link href="/skills">SKILLS</Link></span>
        <span><Link href="/stories">STORIES</Link></span>
        <span><Link href="/about">ABOUT</Link></span>
        <span><Link href="/contact">CONTACT US</Link></span>
      </nav>


      {/* <nav className="header__nav">
        <Link href="/shop">SHOP</Link>
        <Link href="/skills">SKILLS</Link>
        <Link href="/stories">STORIES</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT US</Link>
    </nav> */}

    </header>
  );
}