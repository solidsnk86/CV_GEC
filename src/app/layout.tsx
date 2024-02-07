import React from "react";
import type { Metadata } from "next";
import { METADATA } from "@/Constants"
import "./globals.css";

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
