import type { Metadata } from "next";
import { Inter, Inter_Tight, Francois_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

const francoisOne = Francois_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-francois-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WEME — Meet your new AI creative collaborator",
  description:
    "Capture, organize, and elevate your ideas across work, life and leisure.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} ${francoisOne.variable} font-tight antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
