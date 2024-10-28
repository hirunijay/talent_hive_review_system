import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talent Hive Review System",
  description: "Review System created for talent hive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-ubuntu antialiased`}>{children}</body>
    </html>
  );
}
