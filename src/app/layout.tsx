import type { Metadata } from "next";

import MouseFollow from "@/app/components/MouseFollow";
import Navigation from "@/app/components/Navigation";

import "@/app/styles/global.scss";

export const metadata: Metadata = {
  title: "Sam Roberts",
  description: "Sam Roberts, a Lead Developer working in London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="app">
        <MouseFollow />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
