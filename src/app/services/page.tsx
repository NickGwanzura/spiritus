import Services from "@/components/Services";
import Approach from "@/components/Approach";

export const metadata = {
  title: "Services — Spiritus Systems",
  description: "SaaS, AI, CRM, systems integration, digital strategy, and branding.",
};

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <Services />
      <Approach />
    </div>
  );
}
