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
      <body className="app">
        <MouseFollow />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
