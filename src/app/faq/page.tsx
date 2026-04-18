import FAQ from "@/components/FAQ";

export const metadata = {
  title: "FAQ | Spiritus Systems",
  description:
    "Common questions about working with Spiritus Systems: pricing, project timelines, technology stack, maintenance, and Zim-specific considerations.",
};

export default function FAQPage() {
  return (
    <div style={{ paddingTop: 88 }}>
      <FAQ />
    </div>
  );
}
