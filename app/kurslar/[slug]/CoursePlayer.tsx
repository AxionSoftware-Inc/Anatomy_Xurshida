"use client";

import { useState } from "react";
import { BookIcon, CheckIcon, ClockIcon, EyeIcon, PlayIcon } from "@/components/icons";
import type { Course, Lesson } from "@/lib/catalog";

type FormatKey = "video" | "presentation" | "quiz" | "visual";

const formats: { key: FormatKey; label: string }[] = [
  { key: "video", label: "Videodars" },
  { key: "presentation", label: "Prezentatsiya" },
  { key: "quiz", label: "Test" },
  { key: "visual", label: "Rasmli savollar" },
];

function PresentationPanel({ lesson }: { lesson: Lesson }) {
  return <div className="presentation-panel"><div className="presentation-head"><span>SLIDE 01 — 03</span><strong>{lesson.title}</strong></div><div className="slide-grid"><article><span>01</span><strong>Asosiy tushuncha</strong><p>{lesson.summary}</p></article><article><span>02</span><strong>Struktura va vazifa</strong><p>Muhim qismlarni ajrating va ularning vazifasini bir-biriga bog‘lang.</p></article><article><span>03</span><strong>Klinik eslatma</strong><p>Bilimni amaliy kuzatuv bilan bog‘lash uchun qisqa xulosa.</p></article></div></div>;
}

function QuizPanel() {
  const [selected, setSelected] = useState<number | null>(null);
  const options = ["Yurakning tashqi qavati", "Yurakning asosiy mushak qavati", "Yurak bo‘shlig‘ini qoplovchi qavat"];
  return <div className="quiz-panel"><div className="quiz-top"><span>01 / 03</span><span>Bir javobni tanlang</span></div><h3>Asosiy mushak qavati qaysi?</h3><div className="quiz-options">{options.map((option, index) => <button key={option} type="button" className={selected === index ? (index === 1 ? "is-correct" : "is-wrong") : ""} onClick={() => setSelected(index)}><span>{String.fromCharCode(65 + index)}</span>{option}{selected === index && <CheckIcon />}</button>)}</div>{selected !== null && <p className={`quiz-result ${selected === 1 ? "is-correct" : "is-wrong"}`}>{selected === 1 ? "To‘g‘ri. Miokard yurakning qisqarishini ta’minlaydi." : "Qayta ko‘ring. To‘g‘ri javob — miokard."}</p>}</div>;
}

function VisualPanel({ lesson }: { lesson: Lesson }) {
  return <div className="visual-panel"><div className="visual-illustration"><div className="visual-ring visual-ring-one" /><div className="visual-ring visual-ring-two" /><div className="visual-organ"><span /><span /><span /></div><i className="visual-pin visual-pin-one" /><i className="visual-pin visual-pin-two" /><i className="visual-pin visual-pin-three" /></div><div className="visual-questions"><span>RASM / 01</span><h3>Rasmda ajratilgan struktura qaysi?</h3><p>{lesson.title} bo‘yicha asosiy anatomik belgini toping.</p><div><button type="button">A · Klapan</button><button type="button">B · Kamera</button><button type="button">C · Mushak</button></div></div></div>;
}

export default function CoursePlayer({ course }: { course: Course }) {
  const [activeLesson, setActiveLesson] = useState(0);
  const [activeFormat, setActiveFormat] = useState<FormatKey>("video");
  const lesson = course.lessons[activeLesson];

  function selectLesson(index: number) {
    setActiveLesson(index);
    setActiveFormat("video");
  }

  return <section className="player-section page-width"><div className="player-layout"><div className="player-main"><div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${lesson.videoId}?rel=0&modestbranding=1`} title={`${lesson.title} — medstudy video darsi`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="player-caption"><div><span className="section-kicker">Dars {String(lesson.number).padStart(2, "0")}</span><h2>{lesson.title}</h2><p>{lesson.summary}</p></div><span className="private-tag"><i /> Private YouTube</span></div><div className="format-tabs" role="tablist" aria-label="Kurs materiallari">{formats.map((format) => <button type="button" role="tab" aria-selected={activeFormat === format.key} className={activeFormat === format.key ? "is-active" : ""} onClick={() => setActiveFormat(format.key)} key={format.key}>{format.key === "video" && <PlayIcon />}{format.key === "presentation" && <BookIcon />}{format.key === "quiz" && <CheckIcon />}{format.key === "visual" && <EyeIcon />}{format.label}</button>)}</div><div className="format-panel">{activeFormat === "video" && <div className="video-note"><span><PlayIcon /></span><div><strong>Videodars tayyor</strong><p>YouTube’dagi private video shu oynada ko‘rsatiladi. Darsni ko‘rish uchun yuqoridagi playerdan foydalaning.</p></div></div>}{activeFormat === "presentation" && <PresentationPanel lesson={lesson} />}{activeFormat === "quiz" && <QuizPanel />}{activeFormat === "visual" && <VisualPanel lesson={lesson} />}</div></div><aside className="lesson-sidebar"><div className="lesson-sidebar-head"><div><span className="section-kicker">Kurs tarkibi</span><h2>{course.lessonCount} ta dars</h2></div><span>{course.duration}</span></div><div className="lesson-list">{course.lessons.map((item, index) => <button className={`lesson-item ${activeLesson === index ? "is-active" : ""}`} type="button" onClick={() => selectLesson(index)} key={item.title}><span className="lesson-item-number">{String(item.number).padStart(2, "0")}</span><span className="lesson-item-copy"><strong>{item.title}</strong><small><ClockIcon /> {item.duration}</small></span><PlayIcon /></button>)}</div><div className="resource-block"><span className="section-kicker">Qo‘shimcha</span><div className="resource-list">{course.resources.map((resource) => <a className="resource-item" href={resource.href} target="_blank" rel="noreferrer" key={resource.title}><span className="resource-icon">{resource.kind === "ebook" ? <BookIcon /> : <EyeIcon />}</span><span><strong>{resource.title}</strong><small>{resource.meta}</small></span><span className="resource-arrow">↗</span></a>)}</div></div></aside></div></section>;
}
