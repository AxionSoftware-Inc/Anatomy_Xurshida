import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { subjects } from "@/lib/catalog";

export const metadata = {
  title: "Fanlar — medstudy",
  description: "Anatomiya, oftalmologiya, asab va ruhiy kasalliklar, valeologiya fanlari bo‘yicha kurslar.",
};

export default function SubjectsPage() {
  return (
    <div className="site-shell inner-page">
      <SiteHeader />
      <main>
        <section className="catalog-hero page-width">
          <div><span className="eyebrow"><span className="eyebrow-mark" /> 01 — Fanlar katalogi</span><h1>Bilimni fanlar<br /><em>bo‘yicha</em> tartiblang.</h1><p>Bir yo‘nalishni tanlang. Har bir fan ichida mavzular, serial kurslar va kerakli materiallar ketma-ket joylashgan.</p></div>
          <div className="catalog-index"><span>MEDSTUDY / CATALOG</span><strong>04</strong><small>fan yo‘nalishi</small></div>
        </section>

        <section className="catalog-list page-width">
          <div className="list-heading"><span className="section-kicker">Yo‘nalishlar</span><span>Fan / Mavzu / Kurs</span></div>
          {subjects.map((subject, index) => (
            <Link className={`catalog-row catalog-row--${subject.accent}`} href={`/fanlar/${subject.slug}`} key={subject.slug}>
              <span className="catalog-row-number">0{index + 1}</span>
              <span className="catalog-row-main"><strong>{subject.name}</strong><small>{subject.description}</small></span>
              <span className="catalog-row-count"><b>{subject.courseCount}</b><small>kurs</small></span>
              <span className="catalog-row-count"><b>{subject.topicCount}</b><small>mavzu</small></span>
              <span className="catalog-row-arrow"><ArrowIcon /></span>
            </Link>
          ))}
        </section>

        <section className="catalog-note page-width">
          <div><span className="section-kicker">Tuzilishi</span><h2>Har bir fan ichida bir xil, tushunarli ritm.</h2></div>
          <div className="catalog-note-items"><p><CheckIcon /> Mavzu bo‘yicha serial kurslar</p><p><CheckIcon /> Private YouTube videodarslar</p><p><CheckIcon /> Prezentatsiya va testlar</p><p><CheckIcon /> Elektron kitoblar va qo‘shimcha videolar</p></div>
        </section>
      </main>
      <footer className="site-footer page-width"><Link className="brand" href="/"><span className="brand-mark">M</span><span>medstudy</span></Link><span>Tibbiy ta’limni tartibliroq qiling.</span><span>© 2026</span></footer>
    </div>
  );
}
