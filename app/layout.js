import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "Velora",
  description: "Your journaling method.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <div className="inset-0 bg-[url('/bg.jpg')] opacity-50 fixed -z-10" />

          <Header/>

          <main className="min-h-screen">
            {children}
          </main>

          <Footer/>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
