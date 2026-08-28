"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

type PlanKey = "dev" | "arch";

const planDetails: Record<PlanKey, {
  label: string;
  name: string;
  price: string;
  description: string;
  audience: string;
  power: string;
  setup: string;
  focus: string;
  features: string[];
  images: { src: string; alt: string }[];
}> = {
  dev: {
    label: "Dasturlash uchun",
    name: "Developer Start",
    price: "20$",
    description: "Kodni o‘rganish, web development va kundalik dasturlash uchun ishni tez boshlashga yordam beradigan paket.",
    audience: "Boshlovchi developerlar, talabalar va frilanserlar",
    power: "Kirish darajasi",
    setup: "VS Code · Git · Node.js",
    focus: "Kod yozish va development",
    features: [
      "Ishlashga tayyor desktop hardware",
      "SSD asosidagi tezkor ish muhiti",
      "Asosiy development dasturlari o‘rnatiladi",
      "Kerakli setup ro‘yxati oldindan kelishiladi",
    ],
    images: [
      { src: "/developer-workstation.jpeg", alt: "Kod yozish uchun ko‘p monitorli ish joyi" },
      { src: "/workstation-office.jpeg", alt: "Desktop kompyuterlar joylashgan ish muhiti" },
    ],
  },
  arch: {
    label: "Arxitektura uchun",
    name: "Architecture Pro",
    price: "50$",
    description: "Chizma, 3D va katta loyiha fayllari bilan ishlaydigan arxitektorlar uchun kuchliroq ish muhiti.",
    audience: "Arxitektura talabalari, dizaynerlar va loyiha jamoalari",
    power: "Kuchliroq konfiguratsiya",
    setup: "AutoCAD · Revit · SketchUp",
    focus: "Chizma, 3D va loyiha fayllari",
    features: [
      "Kuchliroq desktop hardware",
      "Ko‘proq RAM talab qiladigan ishlar uchun mos",
      "Arxitektura dasturlari uchun tayyor setup",
      "Aniq konfiguratsiya loyiha vazifasiga qarab kelishiladi",
    ],
    images: [
      { src: "/architect-workstation.jpeg", alt: "Kompyuterda arxitektura loyihasini ko‘rayotgan mutaxassis" },
      { src: "/architecture-plans.jpeg", alt: "Kompyuter yonidagi arxitektura chizmalari" },
    ],
  },
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path d="m4 9.2 3.1 3.1L14.2 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PackageExplorer() {
  const [activePlan, setActivePlan] = useState<PlanKey>("dev");
  const [activePhoto, setActivePhoto] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const plan = planDetails[activePlan];

  function choosePlan(key: PlanKey) {
    setActivePlan(key);
    setActivePhoto(0);
    setSubmitted(false);
  }

  function scrollToRequest() {
    document.getElementById("sorov")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="packages-page">
      <header className="site-header packages-header">
        <Link className="brand" href="/" aria-label="RigRent bosh sahifasi">
          <span className="brand-mark">R</span>
          <span>RigRent</span>
        </Link>
        <nav className="main-nav" aria-label="Paketlar navigatsiyasi">
          <Link href="/#narxlar">Narxlar</Link>
          <a href="#tanlash">Tanlash</a>
          <a href="#taqqoslash">Taqqoslash</a>
        </nav>
        <Link className="header-cta" href="/">Bosh sahifa <ArrowIcon /></Link>
      </header>

      <main>
        <section className="packages-hero page-width">
          <div>
            <span className="section-kicker">Batafsil tanlov</span>
            <h1>Qaysi ish uchun PC kerak?</h1>
            <p>Bu yerda paketlarni solishtiring, real ish muhitini ko‘ring va sizga mos konfiguratsiyani tanlang.</p>
          </div>
          <div className="detail-stats" aria-label="RigRent paketlari haqida">
            <div><strong>02</strong><span>asosiy yo‘nalish</span></div>
            <div><strong>20–50$</strong><span>oylik ijara</span></div>
            <div><strong>01</strong><span>sodda tanlov</span></div>
          </div>
        </section>

        <section className="explorer-section page-width" id="tanlash">
          <div className="explorer-heading">
            <div className="section-intro">
              <span className="section-kicker">1. Yo‘nalishni tanlang</span>
              <h2>Vazifangizga mos setni ko‘ring.</h2>
            </div>
            <div className="package-tabs" role="tablist" aria-label="Paketni tanlang">
              {(Object.keys(planDetails) as PlanKey[]).map((key) => (
                <button key={key} type="button" role="tab" aria-selected={activePlan === key} className={activePlan === key ? "is-active" : ""} onClick={() => choosePlan(key)}>
                  <span>{planDetails[key].label}</span><strong>{planDetails[key].price}<small>/ oy</small></strong>
                </button>
              ))}
            </div>
          </div>

          <div className="explorer-grid">
            <div className="gallery-panel">
              <div className="gallery-main">
                <Image src={plan.images[activePhoto].src} alt={plan.images[activePhoto].alt} fill sizes="(max-width: 900px) 100vw, 55vw" className="gallery-image" />
                <span className="gallery-label">Real ish muhiti</span>
                <span className="gallery-count">0{activePhoto + 1} / 0{plan.images.length}</span>
              </div>
              <div className="gallery-thumbs">
                {plan.images.map((image, index) => (
                  <button key={image.src} type="button" className={activePhoto === index ? "is-active" : ""} aria-label={`${index + 1}-rasmni ko‘rish`} onClick={() => setActivePhoto(index)}>
                    <Image src={image.src} alt="" fill sizes="150px" className="gallery-thumb-image" />
                  </button>
                ))}
              </div>
              <p className="photo-credit">Rasmlar: Pexels. Qurilmaning aniq ko‘rinishi konfiguratsiyaga qarab farq qiladi.</p>
            </div>

            <div className="detail-panel">
              <span className="detail-label">{plan.label}</span>
              <h2>{plan.name}</h2>
              <p className="detail-description">{plan.description}</p>
              <div className="detail-price"><strong>{plan.price}</strong><span>/ oy</span><em>oyma-oy ijara</em></div>
              <div className="spec-grid">
                <div><span>Kimlar uchun</span><strong>{plan.audience}</strong></div>
                <div><span>Quvvat</span><strong>{plan.power}</strong></div>
                <div><span>Asosiy ish</span><strong>{plan.focus}</strong></div>
                <div><span>Setup misoli</span><strong>{plan.setup}</strong></div>
              </div>
              <div className="included-block">
                <span className="included-heading">Paket nimalarni anglatadi</span>
                <ul>{plan.features.map((feature) => <li key={feature}><CheckIcon /> <span>{feature}</span></li>)}</ul>
              </div>
              <button type="button" className="button button-primary detail-action" onClick={scrollToRequest}>Shu paket haqida so‘rash <ArrowIcon /></button>
            </div>
          </div>
        </section>

        <section className="comparison-section" id="taqqoslash">
          <div className="page-width">
            <div className="section-intro">
              <span className="section-kicker">2. Taqqoslang</span>
              <h2>Farqi bir qarashda ko‘rinsin.</h2>
            </div>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead><tr><th>Mezon</th><th>Developer Start</th><th>Architecture Pro</th></tr></thead>
                <tbody>
                  <tr><th>Narx</th><td>20$ / oy</td><td>50$ / oy</td></tr>
                  <tr><th>Yo‘nalish</th><td>Dasturlash</td><td>Arxitektura va 3D</td></tr>
                  <tr><th>Yondashuv</th><td>Ixcham boshlanish</td><td>Kuchliroq ish muhiti</td></tr>
                  <tr><th>Setup</th><td>VS Code, Git, Node.js</td><td>AutoCAD, Revit, SketchUp</td></tr>
                  <tr><th>Tanlash vaqti</th><td>O‘rganish yoki kod yozish kerak bo‘lsa</td><td>Katta chizma va loyiha fayllari bo‘lsa</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="selection-section page-width">
          <div className="section-intro"><span className="section-kicker">3. Keyingi qadam</span><h2>Aniq konfiguratsiyani birga kelishamiz.</h2></div>
          <div className="selection-steps">
            <div><span>01</span><strong>Siz vazifani aytasiz</strong><p>Qaysi dasturlar va qanday loyihalar bilan ishlashingizni yozasiz.</p></div>
            <div><span>02</span><strong>Biz setni moslaymiz</strong><p>Hardware va setup’ni sizning real ehtiyojingizga qarab aniqlashtiramiz.</p></div>
            <div><span>03</span><strong>Ijara boshlanadi</strong><p>Tayyor qurilma bo‘yicha keyingi qadamni kelishib olamiz.</p></div>
          </div>
        </section>

        <section className="request-section page-width" id="sorov">
          <div className="request-card">
            <div className="request-copy"><span className="section-kicker section-kicker--light">Mos variantni so‘rang</span><h2>{plan.name} sizga mosmi?</h2><p>Ismingiz va aloqa ma’lumotingizni qoldiring. Aniq konfiguratsiya hamda mavjud variantlarni alohida kelishamiz.</p></div>
            {submitted ? (
              <div className="request-success" role="status"><span className="success-icon"><CheckIcon /></span><strong>So‘rov tayyor.</strong><p>Keyingi qadamda konfiguratsiyani birga aniqlashtiramiz.</p><button type="button" className="text-button" onClick={() => setSubmitted(false)}>Formani qayta ochish</button></div>
            ) : (
              <form className="request-form" onSubmit={handleSubmit}>
                <label><span>Ismingiz</span><input name="name" type="text" placeholder="Masalan, Aziz" required /></label>
                <label><span>Telegram yoki telefon</span><input name="contact" type="text" placeholder="@username yoki +998" required /></label>
                <label className="request-form-wide"><span>Qanday dasturlar kerak?</span><textarea name="programs" rows={3} placeholder="Masalan, VS Code va Docker yoki Revit va SketchUp" /></label>
                <button className="button button-primary request-button" type="submit">So‘rovni tayyorlash <ArrowIcon /></button>
                <small>To‘lov bu sahifada yo‘q — avval sizga mos qurilmani aniqlaymiz.</small>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer page-width"><Link className="brand" href="/"><span className="brand-mark">R</span><span>RigRent</span></Link><p>Kompyuterga kirish osonroq bo‘lishi kerak.</p><span>© 2026 RigRent</span></footer>
    </div>
  );
}
