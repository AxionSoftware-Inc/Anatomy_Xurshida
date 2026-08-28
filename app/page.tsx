import Image from "next/image";
import Link from "next/link";

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

const previewPlans = [
  {
    name: "Developer Start",
    label: "Dasturlash uchun",
    price: "20$",
    description: "Kod yozish va o‘rganishni boshlash uchun ixcham, tayyor set.",
    tone: "dark",
  },
  {
    name: "Architecture Pro",
    label: "Arxitektura uchun",
    price: "50$",
    description: "Chizma va 3D loyihalar uchun kuchliroq tayyor ish muhiti.",
    tone: "light",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RigRent bosh sahifasi">
          <span className="brand-mark">R</span>
          <span>RigRent</span>
        </a>
        <nav className="main-nav" aria-label="Asosiy navigatsiya">
          <a href="#qanday">Qanday ishlaydi</a>
          <a href="#narxlar">Narxlar</a>
          <Link href="/paketlar">Batafsil tanlov</Link>
        </nav>
        <Link className="header-cta" href="/paketlar">
          Paketlarni ko‘rish <ArrowIcon />
        </Link>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-grid page-width">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Ishlash uchun PC. Sotib olish uchun emas.</div>
              <h1>Sizga kompyuter kerak. Uni sotib olishingiz shart emas.</h1>
              <p className="hero-lede">Eski hardware’larni yig‘amiz, ishga tayyorlaymiz va sizga oyma-oy ijaraga beramiz. Dasturlashdan arxitekturagacha — boshlash narxini pasaytiramiz.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#narxlar">Narxlarni ko‘rish <ArrowIcon /></a>
                <a className="button button-quiet" href="#qanday">Qanday ishlaydi <span className="button-arrow">↓</span></a>
              </div>
              <div className="hero-notes" aria-label="RigRent afzalliklari">
                <span><CheckIcon /> Ishlashga tayyor</span>
                <span><CheckIcon /> Dasturlar o‘rnatilgan</span>
                <span><CheckIcon /> Oyma-oy</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="RigRent tayyor desktop kompyuter seti">
              <div className="visual-topline"><span>RIG / 001</span><span className="visual-status"><i /> Tayyorlanmoqda</span></div>
              <div className="visual-image-wrap">
                <Image
                  src="/rig-rent-hero.png"
                  alt="Qayta tayyorlangan desktop kompyuter va klaviatura"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="hero-image"
                />
                <div className="visual-price-card">
                  <span>Developer Start</span>
                  <strong>20$ <small>/ oy</small></strong>
                  <em>ishga tayyor</em>
                </div>
              </div>
              <div className="visual-caption"><span>Tekshirildi</span><span>•</span><span>Toza o‘rnatish</span><span>•</span><span>Sodda narx</span></div>
            </div>
          </div>
          <div className="hero-bottom-line page-width"><span>Yangi PC xarajatini keyinga qoldiring.</span><span>Hozir kerak bo‘lganini ijaraga oling.</span></div>
        </section>

        <section className="simple-process page-width" id="qanday">
          <div className="section-intro compact-intro">
            <span className="section-kicker">Qanday ishlaydi</span>
            <h2>Oddiy: tanlaysiz, olasiz, ishlaysiz.</h2>
          </div>
          <div className="process-row">
            <div><span>01</span><p>Sohangizni aytasiz</p></div>
            <div><span>02</span><p>Tayyor paketni tanlaysiz</p></div>
            <div><span>03</span><p>Ishni boshlaysiz</p></div>
          </div>
        </section>

        <section className="landing-pricing" id="narxlar">
          <div className="page-width">
            <div className="pricing-heading">
              <div className="section-intro">
                <span className="section-kicker">Sodda narxlar</span>
                <h2>Qaysi ish uchun kerak?</h2>
                <p>Ikki asosiy yo‘nalish. Batafsil konfiguratsiya alohida sahifada.</p>
              </div>
              <Link className="detail-link" href="/paketlar">To‘liq tanlovga o‘tish <ArrowIcon /></Link>
            </div>
            <div className="preview-plans">
              {previewPlans.map((plan) => (
                <article className={`preview-plan preview-plan--${plan.tone}`} key={plan.name}>
                  <div className="preview-plan-top"><span>{plan.label}</span><span>RigRent</span></div>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="preview-price"><strong>{plan.price}</strong><span>/ oy</span></div>
                  <Link className="preview-plan-link" href="/paketlar">Batafsil ko‘rish <ArrowIcon /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta page-width">
          <div>
            <span className="section-kicker">Tayyor boshlang</span>
            <h2>Sizga mos paketni toping.</h2>
          </div>
          <Link className="button button-primary" href="/paketlar">Batafsil tanlov <ArrowIcon /></Link>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="brand" href="#top"><span className="brand-mark">R</span><span>RigRent</span></a>
        <p>Kompyuterga kirish osonroq bo‘lishi kerak.</p>
        <span>© 2026 RigRent</span>
      </footer>
    </div>
  );
}
