import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <MissionVision />
      <WhyChooseUs />
      <BookingForm />
      <Contact />
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default Index;
