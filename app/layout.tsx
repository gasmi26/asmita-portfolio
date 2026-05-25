import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asmita Ghosh-CS Engineer",
  description: "Portfolio of Asmita Ghosh, a Computer Science engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
