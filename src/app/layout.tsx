import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bông Ớt - Tương Ớt Tự Nhiên 100%",
  description: "Tương ớt Bông Ớt: Sản phẩm tự nhiên, không tỏi, không cà chua, không chất bảo quản. Hương vị đích thực, an toàn cho sức khỏe.",
  keywords: ["Bông Ớt", "tương ớt", "tương ớt tự nhiên", "tương ớt không tỏi"],
  authors: [{ name: "Bông Ớt" }],
  icons: {
    icon: "/flash.png",
  },
  openGraph: {
    title: "Bông Ớt - Tương Ớt Tự Nhiên",
    description: "Tương ớt tự nhiên 100%, không chất bảo quản, an toàn cho sức khỏe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bông Ớt - Tương Ớt Tự Nhiên",
    description: "Tương ớt tự nhiên 100%, không chất bảo quản, an toàn cho sức khỏe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
