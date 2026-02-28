import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
    variable: "--font-ibm-plex-serif",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
})

const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
    display: "swap",
})

export const metadata: Metadata = {
  title: "BiblioMate AI",
  description: "Transform your book into interactive AI-powered content with BiblioMate AI. Upload PDFs and chat with your books using AI voice. Start your journey to smarter reading today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSerif.variable} ${monaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
