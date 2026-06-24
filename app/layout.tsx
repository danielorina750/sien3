import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { Preloader } from "@/components/motion/Preloader";

export const metadata: Metadata = {
  title: {
    default: "SIEN Group | Architecture, Engineering & Development",
    template: "%s | SIEN Group",
  },
  description:
    "SIEN Group is a multi-disciplinary architectural design, engineering, development and infrastructure consulting firm delivering refined projects across East Africa.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sien.co.ke"),
  openGraph: {
    title: "SIEN Group | Architecture, Engineering & Development",
    description: "Designed systems. Engineered landmarks.",
    type: "website",
    images: ["/assets/projects/hill-side-residential-home.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#031f18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <SmoothScrollProvider>
          <Preloader />
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
