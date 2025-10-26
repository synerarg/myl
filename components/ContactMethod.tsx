import Link from "next/link"

export default function ContactMethod({
    href,
    icon,
    label,
  }: {
    href: string
    icon: React.ReactNode
    label: string
  }) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-md p-3 border border-transparent transition-all hover:bg-[#e8f7fb]/50 hover:border-green/40 group"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-green group-hover:bg-green/10 transition-colors">
          {icon}
        </span>
        <span className="text-sm text-gray break-all">{label}</span>
      </Link>
    )
  }
  