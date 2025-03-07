import type { Metadata } from "next";
import {  Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const dyna = Outfit({
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Noman Haider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dyna.className} w-full h-screen flex flex-col justify-between bg-deepblue`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
