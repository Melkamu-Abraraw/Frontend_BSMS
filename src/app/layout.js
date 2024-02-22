import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BSMS",
  description:
    "Final Project For BSc Developed By WKU Software Engineering Student(GZMN)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
