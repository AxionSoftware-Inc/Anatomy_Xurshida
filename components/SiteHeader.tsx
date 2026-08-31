import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="medstudy bosh sahifasi"><span className="brand-mark">M</span><span>medstudy</span></Link>
      <nav className="main-nav" aria-label="Asosiy navigatsiya"><Link href="/fanlar">Fanlar</Link><Link href="/#tizim">Platforma</Link><Link href="/#kurslar">Kurslar</Link></nav>
      <Link className="header-link" href="/fanlar">Kursni tanlash <ArrowIcon /></Link>
    </header>
  );
}
