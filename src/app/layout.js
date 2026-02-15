import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export const metadata = {
  title: {
    default: "Jigyasa Hospital",
    template: "%s | Jigyasa Hospital",
  },
  description:
    "Jigyasa Hospital - Advanced healthcare services in Saharanpur with expert doctors and modern facilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="bg-white text-gray-900">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
