export default function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="external-arrow" aria-hidden="true">↗</span>
      <span className="sr-only"> (새 탭)</span>
    </a>
  );
}
