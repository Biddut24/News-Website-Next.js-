import Navbar from "@/Components/shared/Navbar";
import "./globals.css";
import Footer from "@/Components/shared/Footer";

export const metadata = {
  title: "news portal",
  description:
    "Get the latest breaking news, headlines, and trending stories from around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased"
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>

      </body>
    </html>
  );
}
