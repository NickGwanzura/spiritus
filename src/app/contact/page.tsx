import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact — Spiritus Systems",
  description: "Start a conversation with Spiritus Systems.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <Contact />
    </div>
  );
}
