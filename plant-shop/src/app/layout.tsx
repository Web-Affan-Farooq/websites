import type { Metadata } from "next";
import "./globals.css";

// _____Importing header and footer 
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Planto .",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-inter text-white">
          <div className="bg-black w-full h-screen">
          <Header/>
        {children}
        <Footer/>
          </div>
      </body>
    </html>
  );
}
