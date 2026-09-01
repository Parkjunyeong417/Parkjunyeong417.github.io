import SectionHeading from "./SectionHeading.jsx";

export default function CertificationsSection({ certifications }) {
  return (
    <section className="content-section" id="certification" aria-labelledby="certification-title">
      <SectionHeading number="03" id="certification-title" title="자격증" description="보유 중인 자격증과 취득 시기입니다." />
      <dl className="skills-list">
        {certifications.map((certification) => (
          <div className="skill-row" key={certification.name}>
            <dt>{certification.name}</dt>
            <dd>
              <p className="skill-technologies">{certification.technologies}</p>
              <p className="skill-context">
                {certification.dateLabel}:{" "}
                {certification.date ? (
                  <time dateTime={certification.date.replaceAll(".", "-")}>{certification.date}</time>
                ) : "확인 필요"}
              </p>
              {certification.certificateNumber && (
                <p className="skill-context">{certification.numberLabel}: {certification.certificateNumber}</p>
              )}
              <p className="skill-context">발급처: {certification.issuer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
