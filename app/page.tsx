import MatrixBg from "@/components/MatrixBg";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import CollabPosters from "@/components/CollabPosters";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "var(--bg-primary)",
      }}
    >
      <MatrixBg />
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,150,12,0.06) 0%, transparent 60%)",
        }}
      />
      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
        <Hero />
        <Events />
        <CollabPosters />
        <Timeline />
        <About />
        <Footer />
      </div>
    </main>
  );
}
