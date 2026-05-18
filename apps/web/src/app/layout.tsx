import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "OPC Scaffold",
  description: "Production-grade scaffold for AI-driven development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
