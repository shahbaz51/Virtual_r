import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Price from "./components/price.jsx";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-32">
        <Hero />
        <Feature />
        <Work />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
