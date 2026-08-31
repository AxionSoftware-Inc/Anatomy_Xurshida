import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { ArrowLeftIcon, ArrowIcon, CheckIcon, ClockIcon, PlayIcon } from "@/components/icons";
import CoursePlayer from "./CoursePlayer";
import { courses, getCourse } from "@/lib/catalog";

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  return { title: course ? `${course.title} — medstudy` : "Kurs topilmadi — medstudy", description: course?.description };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <div className="site-shell inner-page">
      <SiteHeader />
      <main>
        <div className="breadcrumb page-width"><Link href={`/fanlar/${course.subjectSlug}`}><ArrowLeftIcon /> {course.subjectName}</Link><span>/</span><span>{course.title}</span></div>
        <section className={`course-hero course-hero--${course.accent}`}>
          <div className="page-width course-hero-inner"><div className="course-hero-copy"><span className="eyebrow"><span className="eyebrow-mark" /> Serial kurs / {course.subjectName}</span><h1>{course.title}</h1><p>{course.description}</p><div className="course-hero-facts"><span><PlayIcon /> {course.lessonCount} ta dars</span><span><ClockIcon /> {course.duration}</span><span><CheckIcon /> {course.level}</span></div></div><div className="course-hero-index"><span>COURSE</span><strong>0{course.lessonCount}</strong><small>modul ichida</small></div></div>
        </section>

        <CoursePlayer course={course} />

        <section className="course-footer-section page-width"><div><span className="section-kicker">Kurs haqida</span><h2>O‘rganish yo‘li bitta joyda.</h2></div><div className="course-footer-copy"><p>Har bir darsdan keyin mavzuni qayta ko‘rish, testdan o‘tish va tasvirli savollar bilan bilimni tekshirish mumkin.</p><Link className="text-link" href={`/fanlar/${course.subjectSlug}`}>Fanga qaytish <ArrowIcon /></Link></div></section>
      </main>
      <footer className="site-footer page-width"><Link className="brand" href="/"><span className="brand-mark">M</span><span>medstudy</span></Link><span>Tibbiy ta’limni tartibliroq qiling.</span><span>© 2026</span></footer>
    </div>
  );
}
