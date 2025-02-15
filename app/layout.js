import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google"

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "Velora",
  description: "Your journaling method.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <div className="inset-0 bg-[url('/bg.jpg')] opacity-50 fixed -z-10" />
        <Header/>
        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-green-300 py-12 bg-opacity-10">
          <div className="mx-auto px-4 text-center text-gray-900">
            <p>
              Made by Ayush Srivastava
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
