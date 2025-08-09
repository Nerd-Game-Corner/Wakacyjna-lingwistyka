interface LogoProps {
  href: string;
  src: string;
  alt: string;
  className?: string;
}

export default function Logo({ href, src, alt, className }: LogoProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={src} className={className} alt={alt} />
    </a>
  );
}
