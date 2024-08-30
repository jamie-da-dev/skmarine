import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "SK Marine",
  description: "SK Marine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>{children}</body>
    </html>
  );
}
