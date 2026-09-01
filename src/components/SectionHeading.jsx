export default function SectionHeading({ number, id, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <span className="section-number" aria-hidden="true">{number}</span>
        <h2 id={id}>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
