import EvidenceDocument from "./EvidenceDocument.jsx";
import ExternalLink from "./ExternalLink.jsx";

const imageClassName = (image, index) =>
  [
    index === 0 ? "gallery-featured" : "",
    image.src.includes("system-architecture") ? "gallery-wide" : "",
  ]
    .filter(Boolean)
    .join(" ");

export default function ProjectDetail({ project }) {
  return (
    <article className="project-detail" aria-labelledby="detail-title">
      <a className="back-link" href="#projects">← 프로젝트 목록</a>
      <header className="detail-header">
        <p className="project-category">{project.category}</p>
        <h1 className="detail-title" id="detail-title" tabIndex={-1}>{project.title}</h1>
        <p className="detail-introduction">{project.summary}</p>
      </header>

      <div className="detail-layout">
        <div className="detail-body">
          <section className="detail-section">
            <h2>담당 업무</h2>
            <ul className="contributions">
              {project.contributions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          {project.sections.map((section, index) => (
            <section className="detail-section" key={`${project.id}-${index}`}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets?.length > 0 && (
                <ul className="contributions">
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}

          {project.images?.length > 0 && (
            <section className="detail-section">
              <h2>프로젝트 화면</h2>
              <div className="project-gallery project-gallery-grid">
                {project.images.map((image, index) => (
                  <figure className={imageClassName(image, index)} key={image.src}>
                    <a
                      className="gallery-link"
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${image.alt} 원본 이미지 새 탭에서 보기`}
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                    </a>
                    {image.caption && <figcaption>{image.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {project.evidence?.length > 0 && (
            <section className="detail-section evidence-section">
              <h2>증빙 문서</h2>
              <p className="evidence-intro">참가 확인증, 상장 등 프로젝트와 관련된 원본 PDF 문서입니다.</p>
              <ul className="evidence-list">
                {project.evidence.map((document) => (
                  <EvidenceDocument key={document.src} document={document} />
                ))}
              </ul>
            </section>
          )}

          <section className="detail-section detail-outcome">
            <h2>결과 및 현재 단계</h2>
            <p className="result-title">{project.result}</p>
            <p>{project.scope}</p>
          </section>
          <a className="button button-secondary" href="#projects">프로젝트 목록으로</a>
        </div>

        <aside className="detail-aside" aria-label="프로젝트 정보">
          <span className="status-label">{project.status}</span>
          <dl>
            <div><dt>기간</dt><dd>{project.period}</dd></div>
            <div><dt>참여 형태</dt><dd>{project.team}</dd></div>
            <div><dt>담당 역할</dt><dd>{project.role}</dd></div>
          </dl>
          <h2>기술 및 도구</h2>
          <ul className="tech-list">
            {project.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {project.link && (
            <ExternalLink href={project.link} className="repository-link">프로젝트 코드</ExternalLink>
          )}
        </aside>
      </div>
    </article>
  );
}
