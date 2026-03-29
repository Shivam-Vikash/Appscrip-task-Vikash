import Link from "next/link";

export default function MobileNav({ onClose }) {
  return (
    <div className="mobile-nav">

      <div className="mobile-nav__items">
        <span><Link href="/shop">SHOP</Link></span>
        <span><Link href="/skills">SKILLS</Link></span>
        <span><Link href="/stories">STORIES</Link></span>
        <span><Link href="/about">ABOUT</Link></span>
        <span><Link href="/contact">CONTACT US</Link></span>
      </div>

    </div>
  );
}