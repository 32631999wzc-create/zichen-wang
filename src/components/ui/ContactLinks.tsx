import { siteConfig } from "@/lib/site";

interface ContactLinksProps {
  className?: string;
  detailed?: boolean;
}

export default function ContactLinks({ className, detailed = false }: ContactLinksProps) {
  const links = [
    { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}`, external: false },
    { label: "LinkedIn", value: siteConfig.contact.linkedinLabel, href: siteConfig.contact.linkedin, external: true },
    { label: "GitHub", value: siteConfig.contact.githubLabel, href: siteConfig.contact.github, external: true },
  ];

  return (
    <div className={className}>
      {links.map((link) => (
        <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
          {detailed ? <><span>{link.label}</span><strong>{link.value}</strong><i aria-hidden="true">↗</i></> : <>{link.label} ↗</>}
        </a>
      ))}
    </div>
  );
}
