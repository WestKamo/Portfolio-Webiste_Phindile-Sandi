import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phindile Sandi | Junior Software Developer",
  description: "Portfolio of Phindile Sandi — Junior Software Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Persistent ribbon nav */}
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navbar />
        {children}
        <footer className="footer">
          <span>Designed & built by Phindile Sandi.</span>
          <a href="https://github.com/WestKamo">GitHub ↗</a>
        </footer>
      </body>
    </html>
  );
}
