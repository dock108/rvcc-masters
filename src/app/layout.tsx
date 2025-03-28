import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
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
      <body className={`${inter.className} min-h-screen`}>
        <div 
          className="fixed inset-0 bg-cover bg-center z-0 opacity-15"
          style={{ 
            backgroundImage: 'url("/rvcc-background.jpg")',
          }}
        />
        <div className="relative z-10">
          <nav className="bg-white/90 shadow-lg backdrop-blur-sm">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="text-green-800 font-bold text-xl">
                    RVCC Masters Pool
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-green-800 hover:text-green-600">
                    Home
                  </Link>
                  <Link href="/scoring" className="text-green-800 hover:text-green-600">
                    Live Scoring
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-[1400px] mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="bg-white/90 shadow-lg mt-8 backdrop-blur-sm">
            <div className="max-w-[1400px] mx-auto px-6 py-4 text-center text-green-800">
              © 2025 Waldo Enterprises
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
