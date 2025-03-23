import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

import "@/styles/globals.css";
import Header from "@/components/Header";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
              {children}
            </main>
            <Toaster richColors />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
