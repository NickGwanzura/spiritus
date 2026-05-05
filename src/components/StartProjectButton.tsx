import Link from "next/link";

type Props = {
  variant?: "primary" | "ghost";
  children?: React.ReactNode;
  className?: string;
};

export default function StartProjectButton({
  variant = "primary",
  children,
  className,
}: Props) {
  const base =
    variant === "primary" ? "btn-amber hero-cta-primary" : "btn-ghost";
  const label = children ?? "Start a project";

  return (
    <Link href="/start" className={`${base} ${className || ""}`.trim()}>
      {label}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 7H11M7 3L11 7L7 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
