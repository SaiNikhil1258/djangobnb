import type { Metadata } from "next";
import { Content, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignUpModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikhil",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = <p>Ykjhgkjho</p>;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">{children}</div>
        {/* <Modal label="Modal-text" content={content} isOpen={false}  /> */}
        <LoginModal />
        <SignupModal />
      </body>
    </html>
  );
}
