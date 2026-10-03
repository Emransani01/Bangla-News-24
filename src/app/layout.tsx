import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "Bangla News 24",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <Header />

        <Marquee />

        <main className="w-full flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}