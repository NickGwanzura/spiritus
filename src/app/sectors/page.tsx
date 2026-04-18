import Sectors from "@/components/Sectors";

export const metadata = {
  title: "Sectors | Spiritus Systems",
  description:
    "Industries we serve in Zimbabwe: financial services, government, real estate, retail, energy, health, logistics, and startups.",
};

export default function SectorsPage() {
  return (
    <div style={{ paddingTop: 88 }}>
      <Sectors />
    </div>
  );
}
