import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SADP-Nepal | Sustainable Agriculture Development Program",
    template: "%s | SADP-Nepal",
  },
  description:
    "Empowering rural communities through ecological farming, climate resilience, and food sovereignty in Nepal since 2002.",
  openGraph: {
    title: "SADP-Nepal | Sustainable Agriculture Development Program",
    description:
      "Empowering rural communities through ecological farming, climate resilience, and food sovereignty in Nepal.",
    type: "website",
    locale: "en_US",
    siteName: "SADP-Nepal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
