import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RigRent — Ishlash uchun PC, sotib olish uchun emas",
  description: "Ishlashga tayyor desktop kompyuterlarni oyma-oy ijaraga oling. Dasturlash va arxitektura uchun sodda paketlar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
