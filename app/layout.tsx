import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "medstudy — Tibbiy ta’limni tartibliroq qiling",
  description: "Videodars, taqdimot, test va tasvirli savollar jamlangan tibbiy ta’lim platformasi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
