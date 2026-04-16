import About from "@/components/About";
import Manifesto from "@/components/Manifesto";

export const metadata = {
  title: "About — Spiritus Systems",
  description: "Built to think. Built to last. Learn about Spiritus Systems.",
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <About />
      <Manifesto />
    </div>
  );
}
