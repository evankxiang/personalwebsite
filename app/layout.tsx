import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={notoSerif.variable}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("theme");
                  var theme = stored === "dark" || stored === "light"
                    ? stored
                    : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                  document.documentElement.setAttribute("data-theme", theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={notoSerif.className}>
        <div className="site-container">
          <Header />
          <main className="page-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
