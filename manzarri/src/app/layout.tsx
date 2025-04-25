import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Manzarri | Drape Yourself in Luxury",
  description: "Explore various varieties of jewelleries ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
