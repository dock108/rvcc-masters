import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RVCC Masters Pool",
  description: "Raritan Valley Country Club Masters Tournament Pool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#f8faf8]`}>
        <div className="relative z-10">
          <nav className="bg-white shadow-lg">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="flex justify-between h-16">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/rvcc-logo.png"
                      alt="RVCC Logo"
                      fill
                      className="object-contain rounded-full"
                      priority
                    />
                  </div>
                  <Link href="/" className="text-[#006747] font-bold text-xl">
                    RVCC Masters Pool
                  </Link>
                </div>
                <div className="flex items-center space-x-6">
                  <Link href="/" className="text-[#006747] hover:text-[#008759] font-medium">
                    Home
                  </Link>
                  <Link 
                    href="/scoring" 
                    className="bg-[#006747] text-white px-5 py-2 rounded-lg hover:bg-[#008759] transition-colors shadow-md hover:shadow-lg flex flex-col items-center text-sm"
                  >
                    <span className="font-medium">Live Scoring</span>
                    <span className="text-xs">(Available 2 PM EST 4/10)</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-[1400px] mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="bg-white shadow-lg mt-8">
            <div className="max-w-[1400px] mx-auto px-6 py-4 text-center text-[#006747]">
              © 2025 Waldo Enterprises
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
