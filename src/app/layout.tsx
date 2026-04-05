import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nosh Studio — Carpintería & Cocinas a Medida en Marbella",
  description:
    "Estudio de carpintería y cocinas a medida en Marbella. Diseño, fabricación e instalación para promotoras y constructoras.",
  keywords: [
    "cocinas a medida",
    "carpintería Marbella",
    "cocinas de diseño",
    "kitchen design Marbella",
    "bespoke kitchens",
  ],
  openGraph: {
    title: "Nosh Studio — Bespoke Kitchens & Carpentry",
    description:
      "Custom kitchen design, manufacturing and installation in Marbella.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
