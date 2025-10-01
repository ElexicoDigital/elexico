import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ELEXICO DIGITAL",
  description: "Premium hardware and software solutions by ELEXICO DIGITAL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <AnimatedBackground />
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
