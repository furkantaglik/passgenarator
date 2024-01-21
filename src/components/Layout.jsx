import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main className="max-w-screen-xl mx-auto md:pt-5 p-2">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
