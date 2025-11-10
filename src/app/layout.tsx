import type { Metadata } from "next";
import { Libre_Franklin, Merriweather } from "next/font/google";
import "./globals.css";
import TopBar from "./components/topBar";
import Footer from "./components/footer";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "I.D. Guide",
  description: "Step-by-step guides to updating your identity documents in Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.variable} ${merriweather.variable}`}>
        <TopBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
