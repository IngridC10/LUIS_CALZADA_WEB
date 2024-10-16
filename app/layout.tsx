import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const DMSans = localFont({
  src: [
    {
      path: "./public/fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./public/fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Lucho Travel Services",
  description: "Lucho Travel Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Londrina+Sketch&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={DMSans.className}>{children}</body>
    </html>
  );
}
