import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Funngro – Earn Money for Students | Hire Student Talent",
    template: "%s | Funngro",
  },
  description:
    "Funngro helps students earn money by working on real projects and helps companies hire motivated student talent quickly and affordably.",
  keywords: [
    "earn money for students",
    "student freelancing",
    "hire students for projects",
    "student talent platform",
    "part time work for students",
  ],
  authors: [{ name: "Funngro" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
