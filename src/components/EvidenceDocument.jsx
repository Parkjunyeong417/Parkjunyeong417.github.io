export default function EvidenceDocument({ document }) {
  const metadata = [document.issuer, document.date].filter(Boolean).join(" · ");

  return (
    <li className="evidence-item">
      <a
        href={document.src}
        target="_blank"
        rel="noopener noreferrer"
        className="evidence-link"
        aria-label={`${document.title} PDF 새 탭에서 열기`}
      >
        <span className="evidence-file-type">{document.type || "PDF"}</span>
        <span className="evidence-copy">
          <strong>{document.title}</strong>
          {document.description && <span>{document.description}</span>}
          {metadata && <small>{metadata}</small>}
        </span>
        <span className="evidence-open" aria-hidden="true">열기</span>
      </a>
    </li>
  );
}
