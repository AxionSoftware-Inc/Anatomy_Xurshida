import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { ArrowIcon, CheckIcon, ClockIcon, PlayIcon } from "@/components/icons";
import { courses } from "@/lib/catalog";

export const metadata = {
  title: "Kurslar — medstudy",
  description: "medstudy platformasidagi serial tibbiy kurslar katalogi.",
};

export default function CoursesPage() {
  return (
    <div className="site-shell inner-page">
      <SiteHeader />
      <main>
        <section className="catalog-hero course-catalog-hero page-width">
          <div><span className="eyebrow"><span className="eyebrow-mark" /> 02 — Kurslar katalogi</span><h1>Mavzuni kurs<br /><em>ichida</em> o‘rganing.</h1><p>Har bir serial kurs videodars, taqdimot, test va tasvirli savollar bilan bitta o‘quv yo‘liga yig‘ilgan.</p></div>
          <div className="catalog-index"><span>MEDSTUDY / COURSES</span><strong>{String(courses.length).padStart(2, "0")}</strong><small>ochiq kurs</small></div>
        </section>

        <section className="catalog-list course-catalog-list page-width">
          <div className="list-heading"><span className="section-kicker">Barcha kurslar</span><span>Kurs / Fan / Dars</span></div>
          {courses.map((course, index) => (
            <Link className={`catalog-row catalog-row--${course.accent}`} href={`/kurslar/${course.slug}`} key={course.slug}>
              <span className="catalog-row-number">0{index + 1}</span>
              <span className="catalog-row-main"><strong>{course.title}</strong><small>{course.subjectName} · {course.description}</small></span>
              <span className="catalog-row-count"><b>{course.lessonCount}</b><small>dars</small></span>
              <span className="catalog-row-count"><b><ClockIcon /></b><small>{course.duration}</small></span>
              <span className="catalog-row-arrow"><ArrowIcon /></span>
            </Link>
          ))}
        </section>

        <section className="catalog-note page-width course-catalog-note">
          <div><span className="section-kicker">Kurs formati</span><h2>Bitta darsdan keyin ham nimani qilish aniq.</h2></div>
          <div className="catalog-note-items"><p><PlayIcon /> Videoni ko‘ring</p><p><CheckIcon /> Bilimingizni tekshiring</p><p><span className="note-index">03</span> Prezentatsiyani qaytaring</p><p><span className="note-index">04</span> Qo‘shimcha manbaga o‘ting</p></div>
        </section>
      </main>
      <footer className="site-footer page-width"><Link className="brand" href="/"><span className="brand-mark">M</span><span>medstudy</span></Link><span>Tibbiy ta’limni tartibliroq qiling.</span><span>© 2026</span></footer>
    </div>
  );
}
