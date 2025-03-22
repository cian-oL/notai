import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NotAÍ",
  description: "An AI-powered app for your own notaí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
