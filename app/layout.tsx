import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Card, CardContent } from "@/components/ui/card";
import MainProvider from "@/components/providers/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dev Notes",
  description: "Note system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh `}
      >
        <MainProvider>
          <div className="flex max-h-dvh min-h-dvh w-full mx-auto container max-w-5xl p-2">
            <Card className="flex-1 overflow-y-hidden">
              <CardContent className=" p-0 m-0 h-full ">{children}</CardContent>
            </Card>
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
