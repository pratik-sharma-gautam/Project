import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn & Apply",
  description: "Learn things that are Worthy for You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-gray-400">
     {/* <div className=" text-white"> */}
     {/* <Navbar/> */}
     {/* </div> */}
    
      <body className={inter.className}>{children}</body>
    </html>
  );
}
