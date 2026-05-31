import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOSH STUDIO — Carpintería & Cocinas a Medida",
  description:
    "Precisión constructiva y sensibilidad material. Diseño, fabricación e instalación de cocinas y carpintería a medida en Marbella.",
  keywords: [
    "cocinas a medida Marbella",
    "carpintería Marbella",
    "bespoke kitchens Marbella",
    "custom kitchen design",
    "NOSH STUDIO",
  ],
  openGraph: {
    title: "NOSH STUDIO — Bespoke Kitchens & Carpentry",
    description:
      "Crafted with quiet precision. Custom kitchen design, manufacturing and installation in Marbella.",
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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=IBM+Plex+Sans+Condensed:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/logos/NOSH_Logo_Monograma_tecnico_Dark.svg"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
