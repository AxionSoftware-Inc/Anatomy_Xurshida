import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import {
  ArrowIcon,
  BookIcon,
  CheckIcon,
  ClockIcon,
  EyeIcon,
  PlayIcon,
  SparkIcon,
} from "@/components/icons";
import { featuredCourses, subjects } from "@/lib/catalog";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        <section className="home-hero page-width">
          <div className="home-hero-copy">
            <span className="eyebrow"><span className="eyebrow-mark" /> Tibbiy bilimlar uchun raqamli kutubxona</span>
            <h1>Murakkab mavzularni <em>aniq</em> ko‘ring.</h1>
            <p className="hero-lede">Videodars, taqdimot, test va tasvirli savollar — har bir mavzu bir joyda. O‘zingizga qulay vaqtda, tartibli o‘rganing.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/fanlar">Fanlarni ko‘rish <ArrowIcon /></Link>
              <Link className="text-link" href="#tizim">Platforma qanday ishlaydi <ArrowIcon /></Link>
            </div>
            <div className="hero-proof"><CheckIcon /> 4 ta fan <span /> SSG katalog <span /> 100% mavzuli</div>
          </div>

          <div className="hero-module" aria-label="Kurs modulining ko‘rinishi">
            <div className="hero-module-top"><span>MEDSTUDY / 01</span><span className="module-live"><i /> Video dars</span></div>
            <div className="module-screen">
              <div className="screen-orbit screen-orbit-one" />
              <div className="screen-orbit screen-orbit-two" />
              <div className="screen-label">01 / 06</div>
              <svg className="heart-figure" viewBox="0 0 250 250" fill="none" aria-hidden="true">
                <path d="M127 211c-7-8-61-58-82-86C23 94 29 54 59 40c24-11 49-1 65 19 16-20 41-30 65-19 30 14 36 54 14 85-20 28-75 78-82 86Z" stroke="currentColor" strokeWidth="2" />
                <path d="M123 57c-6 19-5 34 7 47 10 10 13 22 8 37M104 55c-3 18-1 29 10 43M151 61c-8 15-8 26-1 38 6 10 8 21 4 31M87 89c18 10 34 18 47 28 15 12 24 26 31 48M165 91c-12 8-23 14-34 25" stroke="currentColor" strokeOpacity=".7" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M124 43v22M124 193v18M72 70l13 13M176 70l-13 13" stroke="currentColor" strokeOpacity=".55" strokeWidth="1" strokeLinecap="round" />
                <circle cx="124" cy="43" r="3" fill="currentColor" /><circle cx="72" cy="70" r="3" fill="currentColor" /><circle cx="176" cy="70" r="3" fill="currentColor" />
              </svg>
              <div className="screen-caption"><span>ANATOMIYA</span><strong>Yurak anatomiyasi</strong><small>Struktura · funksiya · klinik bog‘liqlik</small></div>
              <div className="screen-play"><PlayIcon /></div>
            </div>
            <div className="hero-module-bottom"><span>6 ta dars</span><span>48 daqiqa</span><span>01 / 04 fan</span></div>
          </div>
        </section>

        <section className="metric-row page-width" aria-label="Platforma statistikasi">
          <div><strong>04</strong><span>asosiy fan</span></div>
          <div><strong>40+</strong><span>mavzu va dars</span></div>
          <div><strong>06</strong><span>o‘rganish formati</span></div>
          <div><strong>24/7</strong><span>kirish imkoniyati</span></div>
        </section>

        <section className="home-section page-width" id="fanlar">
          <div className="section-heading">
            <div><span className="section-kicker">Fanlar</span><h2>Kerakli yo‘nalishdan boshlang.</h2></div>
            <Link className="text-link" href="/fanlar">Barcha fanlar <ArrowIcon /></Link>
          </div>
          <div className="subject-grid">
            {subjects.map((subject, index) => (
              <Link className={`subject-card subject-card--${subject.accent}`} href={`/fanlar/${subject.slug}`} key={subject.slug}>
                <div className="subject-card-top"><span>0{index + 1}</span><span>{subject.code}</span></div>
                <div className="subject-symbol" aria-hidden="true">{subject.symbol}</div>
                <h3>{subject.name}</h3>
                <p>{subject.description}</p>
                <div className="subject-card-bottom"><span>{subject.courseCount} ta kurs · {subject.topicCount} ta mavzu</span><ArrowIcon /></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="format-section" id="tizim">
          <div className="page-width">
            <div className="section-heading section-heading--light">
              <div><span className="section-kicker">Har bir mavzuda</span><h2>Bir mavzu. To‘liq o‘quv yo‘li.</h2></div>
              <p>Formatlar bir-birini takrorlamaydi — tushunish, mustahkamlash va eslab qolish uchun ketma-ket ishlaydi.</p>
            </div>
            <div className="format-grid">
              <div className="format-card"><span className="format-number">01</span><PlayIcon /><h3>Videodars</h3><p>Mavzuni izchil tushuntiradigan qisqa va aniq video.</p></div>
              <div className="format-card"><span className="format-number">02</span><BookIcon /><h3>Prezentatsiya</h3><p>Asosiy tushunchalarni qayta ko‘rish uchun vizual konspekt.</p></div>
              <div className="format-card"><span className="format-number">03</span><CheckIcon /><h3>Savol-javob testi</h3><p>Bilimni darhol tekshirish uchun mavzuli savollar.</p></div>
              <div className="format-card"><span className="format-number">04</span><EyeIcon /><h3>Rasmli savollar</h3><p>Struktura va belgilarni ko‘rish orqali mustahkamlash.</p></div>
            </div>
          </div>
        </section>

        <section className="home-section page-width latest-section" id="kurslar">
          <div className="section-heading">
            <div><span className="section-kicker">Tanlangan kurslar</span><h2>Bugun o‘rganish uchun.</h2></div>
            <span className="section-note"><SparkIcon /> Yangi darslar muntazam qo‘shiladi</span>
          </div>
          <div className="course-card-grid">
            {featuredCourses.map((course) => (
              <Link className={`course-card course-card--${course.accent}`} href={`/kurslar/${course.slug}`} key={course.slug}>
                <div className="course-card-visual"><span>{course.subjectName}</span><div className="course-orb" /><PlayIcon /></div>
                <div className="course-card-body"><div className="course-card-meta"><span>{course.level}</span><span><ClockIcon /> {course.duration}</span></div><h3>{course.title}</h3><p>{course.description}</p><div className="course-card-link">Kursni ochish <ArrowIcon /></div></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="closing-section page-width">
          <span className="section-kicker">Soddaroq o‘rganing</span>
          <h2>Bilimni bir joyga yig‘dik.<br /><em>Siz boshlashingiz qoldi.</em></h2>
          <Link className="button button-dark" href="/fanlar">Fanlarni ko‘rish <ArrowIcon /></Link>
        </section>
      </main>

      <footer className="site-footer page-width"><Link className="brand" href="/"><span className="brand-mark">M</span><span>medstudy</span></Link><span>Tibbiy ta’limni tartibliroq qiling.</span><span>© 2026</span></footer>
    </div>
  );
}
