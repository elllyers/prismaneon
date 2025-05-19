import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
  title: "prismaneon",
  description: "User management system for prismaneon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ViewTransition>
    <html lang="en">
      <body className={`${GeistSans.variable}  antialiased`}>{children}</body>
    </html>
    // {/* </ViewTransition> */}
  );
}
