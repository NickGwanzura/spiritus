import About from "@/components/About";

export const metadata = {
  title: "About | Spiritus Systems",
  description:
    "Spiritus Systems is a Zimbabwean technology company building SaaS platforms, AI systems, and infrastructure for organisations across Zimbabwe. Based in Harare.",
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 88 }}>
      <About />
    </div>
  );
}
