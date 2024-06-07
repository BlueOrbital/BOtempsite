import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import NavBar from "./ui/nav/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Orbital",
  description:
    "Welcome to Blue Orbital - Bespoke Web Design. Our site is currently under development, coming soon...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/Favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/Favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/Favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/Favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/Favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/Favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/Favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/Favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/Favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/Favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png" />
        <link rel="manifest" href="/Favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/Favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <header className="fixed w-full h-16 z-50 px-16 border-b-0 border-b-lightGrey">
          <NavBar />
        </header>
        <main className="flex flex-row flex-wrap max-w-100vw h-auto min-h-screen justify-center">
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
