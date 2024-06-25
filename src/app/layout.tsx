import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{display:"flex", justifyContent:"space-evenly", margin:"auto", padding:"20px" ,backgroundColor:"#7568d2" }}>
          <h2 style={{fontSize:"20px"}}>
            <Link href="/">Home</Link>
          </h2>
          <h2 style={{fontSize:"20px"}}>
            <Link href="/firstframe">First</Link>
          </h2>
          <h2 style={{fontSize:"20px"}}>
            <Link href="/secframe">Second</Link>
          </h2>
          <h2 style={{fontSize:"20px"}}>
            <Link href="/thirdframe">Third</Link>
          </h2>
        </div>
        {children}
      </body>
    </html>
  );
}