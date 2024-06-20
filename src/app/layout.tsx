import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TypeSaúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
