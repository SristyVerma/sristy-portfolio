import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sristy-portfolio.vercel.app"),
  title: "Sristy Verma | Frontend Developer",
  description:
    "Sristy Verma is a frontend developer with 2.7 years of experience building responsive React applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sristy Verma | Frontend Developer",
    description:
      "Frontend developer with 2.7 years of experience building responsive React applications.",
    url: "/",
    type: "website",
  },
  keywords: [
    "Sristy Verma",
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
    "Next.js Developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
