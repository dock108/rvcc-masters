import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={`${inter.className} bg-green-50`}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-green-800 font-bold text-xl">
                  RVCC Masters Pool
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/" className="text-green-800 hover:text-green-600">
                  Home
                </a>
                <a href="/scoring" className="text-green-800 hover:text-green-600">
                  Live Scoring
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-white shadow-lg mt-8">
          <div className="max-w-7xl mx-auto px-4 py-4 text-center text-green-800">
            © {new Date().getFullYear()} Raritan Valley Country Club
          </div>
        </footer>
      </body>
    </html>
  );
}
