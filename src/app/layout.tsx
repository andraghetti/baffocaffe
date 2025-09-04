import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Baffo Caffè - Il Nuovo Punto di Ritrovo ad Alfonsine",
  description: "Il nuovo punto di ritrovo per gli amanti del caffè ad Alfonsine. Dove tradizione e passione si incontrano in ogni tazza. Scopri la nostra storia e vieni a trovarci in Via Ventottesima Brigata Garibaldi 6.",
  keywords: "caffè, Alfonsine, bar, espresso, cappuccino, colazione, aperitivo, Baffo Caffè",
  authors: [{ name: "Baffo Caffè" }],
  creator: "Baffo Caffè",
  publisher: "Baffo Caffè",
  openGraph: {
    title: "Baffo Caffè - Il Nuovo Punto di Ritrovo ad Alfonsine",
    description: "Il nuovo punto di ritrovo per gli amanti del caffè ad Alfonsine. Dove tradizione e passione si incontrano in ogni tazza.",
    url: "https://baffocaffe.it",
    siteName: "Baffo Caffè",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Baffo Caffè - Il Nuovo Punto di Ritrovo ad Alfonsine",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baffo Caffè - Il Nuovo Punto di Ritrovo ad Alfonsine",
    description: "Il nuovo punto di ritrovo per gli amanti del caffè ad Alfonsine. Dove tradizione e passione si incontrano in ogni tazza.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
