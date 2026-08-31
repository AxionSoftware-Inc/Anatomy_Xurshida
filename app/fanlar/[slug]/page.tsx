import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { ArrowIcon, ClockIcon, PlayIcon } from "@/components/icons";
import { getCoursesForSubject, getSubject, subjects } from "@/lib/catalog";

export const dynamicParams = false;

export function generateStaticParams() {
  return subjects.map((subject) => ({ slug: subject.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const subject = getSubject(slug);
  return { title: subject ? `${subject.name} — medstudy` : "Fan topilmadi — medstudy", description: subject?.longDescription };
}

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();
  const subjectCourses = getCoursesForSubject(subject.slug);

  return (
    <div className="site-shell inner-page">
      <SiteHeader />
      <main>
        <div className="breadcrumb page-width"><Link href="/fanlar">Fanlar</Link><span>/</span><span>{subject.name}</span></div>
        <section className={`subject-hero subject-hero--${subject.accent}`}>
          <div className="page-width subject-hero-inner"><div><span className="eyebrow"><span className="eyebrow-mark" /> {subject.code} / 0{subjects.findIndex((item) => item.slug === subject.slug) + 1}</span><h1>{subject.name}</h1><p>{subject.longDescription}</p></div><div className="subject-large-number">{subject.symbol}</div></div>
        </section>

        <section className="topic-section page-width">
          <div className="section-heading"><div><span className="section-kicker">Mavzular va kurslar</span><h2>Bir mavzuni tanlab boshlang.</h2></div><span className="section-note">{subject.topicCount} ta mavzu · {subject.courseCount} ta kurs</span></div>
          <div className="topic-list">
            {subjectCourses.length > 0 ? subjectCourses.map((course, index) => (
              <Link className="topic-row" href={`/kurslar/${course.slug}`} key={course.slug}><span className="topic-number">0{index + 1}</span><span className="topic-main"><strong>{course.title}</strong><small>{course.description}</small></span><span className="topic-meta"><span><PlayIcon /> {course.lessonCount} dars</span><span><ClockIcon /> {course.duration}</span></span><span className="topic-arrow"><ArrowIcon /></span></Link>
            )) : <div className="empty-topic"><span>Yaqinda</span><h3>Bu fan bo‘yicha kurslar tayyorlanmoqda.</h3><p>Yangi mavzular qo‘shilganda shu katalogda ko‘rinadi.</p></div>}
            <div className="topic-placeholder"><span className="topic-placeholder-dot" /><div><strong>Keyingi mavzular tayyorlanmoqda</strong><small>Fan bo‘yicha yangi serial kurslar navbat bilan qo‘shiladi.</small></div><span className="topic-placeholder-status">YAQINDA</span></div>
          </div>
        </section>

        <section className="learning-loop page-width"><div><span className="section-kicker">O‘quv ritmi</span><h2>Ko‘ring. O‘qing. Tekshiring.</h2></div><div className="learning-loop-steps"><div><b>01</b><strong>Ko‘ring</strong><p>Videodars orqali mavzuning asosiy g‘oyasini oling.</p></div><div><b>02</b><strong>O‘qing</strong><p>Prezentatsiya va elektron kitob bilan qayta ko‘ring.</p></div><div><b>03</b><strong>Tekshiring</strong><p>Test va rasmli savollar bilan bilimni mustahkamlang.</p></div></div></section>
      </main>
      <footer className="site-footer page-width"><Link className="brand" href="/"><span className="brand-mark">M</span><span>medstudy</span></Link><span>Tibbiy ta’limni tartibliroq qiling.</span><span>© 2026</span></footer>
    </div>
  );
}
