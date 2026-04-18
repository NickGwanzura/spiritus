import Services from "@/components/Services";
import Approach from "@/components/Approach";

export const metadata = {
  title: "Services | Spiritus Systems",
  description:
    "SaaS platforms, AI systems, CRM/ERP, systems integration, digital strategy, and product design. Built for Zimbabwean organisations.",
};

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 88 }}>
      <Services />
      <Approach />
    </div>
  );
}
