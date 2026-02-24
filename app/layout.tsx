import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Evan Xiang",
  description: "Personal website of Evan Xiang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.variable}>
        <div className="site-container">
          <Header />
          <main className="page-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
