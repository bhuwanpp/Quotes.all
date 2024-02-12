import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
const logo = 'https://live.staticflickr.com/65535/53524507874_824bfe902c_n.jpg'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quotes.all",
  description: "You can create Quotes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href={logo} type="image/png"  />
      </head>
      <body className={inter.className}>
        
        <Navbar/>
        {children}
      <script
      src="https://kit.fontawesome.com/c8eb323ddc.js"
      ></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
      </body>

    </html>
  );
}
