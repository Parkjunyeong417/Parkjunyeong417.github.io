import { useEffect, useSyncExternalStore } from "react";
import {  profile,  projects,  skills,  certifications,  experiences,} from "./data.js";

function subscribeToHash(callback) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

const getHash = () => window.location.hash;
const getServerHash = () => "";

function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="external-arrow" aria-hidden="true">
        ↗
      </span>
      <span className="sr-only"> (새 탭)</span>
    </a>
  );
}

function EvidenceDocument({ document }) {
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

function SectionHeading({ number, id, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <span className="section-number" aria-hidden="true">
          {number}
        </span>
        <h2 id={id}>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

function Project({ project }) {
  return (
    <article
      className="project"
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="project-heading">
        <div>
          <p className="project-category">{project.category}</p>
          <h3 id={`${project.id}-title`}>{project.title}</h3>
        </div>
        <div className="project-status">
          <span className="status-label">{project.status}</span>
          <p>{project.period}</p>
        </div>
      </div>

      <dl className="project-facts">
        <div>
          <dt>담당 역할</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>참여 형태</dt>
          <dd>{project.team}</dd>
        </div>
      </dl>
      <p className="project-summary">{project.summary}</p>

      <div className="project-footer">
        <ul className="tech-list" aria-label="사용 기술 및 기획 도구">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a
          href={`#/projects/${project.id}`}
          className="detail-link"
          aria-label={`${project.title} 상세 내용 보기`}
        >
          상세 내용 <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export function ProjectDetail({ project }) {
  return (
    <article className="project-detail" aria-labelledby="detail-title">
      <a className="back-link" href="#projects">
        ← 프로젝트 목록
      </a>
      <header className="detail-header">
        <p className="project-category">{project.category}</p>
        <h1 className="detail-title" id="detail-title" tabIndex={-1}>
          {project.title}
        </h1>
        <p className="detail-introduction">{project.summary}</p>
      </header>

      <div className="detail-layout">
        <div className="detail-body">
          <section className="detail-section">
            <h2>담당 업무</h2>
            <ul className="contributions">
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          {project.sections.map((section, index) => (
            <section className="detail-section" key={`${project.id}-${index}`}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {section.bullets?.length > 0 && (
                <ul className="contributions">
                  {section.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {project.images?.length > 0 && (
            <section className="detail-section">
              <h2>프로젝트 화면</h2>
              <div
                className={`project-gallery ${
                  project.images.length > 1 ? "project-gallery-grid" : ""
                }`}
              >
                {project.images.map((image) => (
                  <figure key={image.src}>
                    <a
                      className="gallery-link"
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${image.alt} 원본 이미지 새 탭에서 보기`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                      />
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
              <p className="evidence-intro">
                참가 확인증, 상장 등 프로젝트와 관련된 원본 PDF 문서입니다.
              </p>
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
          <a className="button button-secondary" href="#projects">
            프로젝트 목록으로
          </a>
        </div>

        <aside className="detail-aside" aria-label="프로젝트 정보">
          <span className="status-label">{project.status}</span>
          <dl>
            <div>
              <dt>기간</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>참여 형태</dt>
              <dd>{project.team}</dd>
            </div>
            <div>
              <dt>담당 역할</dt>
              <dd>{project.role}</dd>
            </div>
          </dl>
          <h2>기술 및 도구</h2>
          <ul className="tech-list">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.link && (
            <ExternalLink href={project.link} className="repository-link">
              프로젝트 코드
            </ExternalLink>
          )}
        </aside>
      </div>
    </article>
  );
}

export default function App() {
  const hash = useSyncExternalStore(subscribeToHash, getHash, getServerHash);
  const isProjectPage = hash.startsWith("#/");
  const projectId = /^#\/projects\/([^/]+)\/?$/.exec(hash)?.[1];
  const selectedProject = projects.find((project) => project.id === projectId);

  useEffect(() => {
    document.title = selectedProject
      ? `${selectedProject.title} · ${profile.englishName}`
      : "Junyeong Park · Portfolio";
    const frame = requestAnimationFrame(() => {
      if (isProjectPage) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.getElementById("detail-title")?.focus({ preventScroll: true });
      } else {
        const target = document.getElementById(hash.slice(1) || "top");
        target?.scrollIntoView({ block: "start", behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, selectedProject, isProjectPage]);

  return (
    <div className="portfolio" id="top">
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        본문으로 건너뛰기
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="wordmark"
            href="#top"
            aria-label="박준영 포트폴리오 처음으로"
          >
            {profile.name}
          </a>
          <nav className="navigation" aria-label="주요 메뉴">
            <a href="#projects">프로젝트</a>
            <a href="#skills">기술</a>
            <a href="#certification">자격증</a>
            <a href="#experience">경험·활동</a>
            <a href="#contact">연락처</a>
          </nav>
        </div>
      </header>

      <main className="container" id="main" tabIndex={-1}>
        {isProjectPage ? (
          selectedProject ? (
            <ProjectDetail key={selectedProject.id} project={selectedProject} />
          ) : (
            <section className="not-found">
              <h1 id="detail-title" tabIndex={-1}>
                프로젝트를 찾을 수 없습니다.
              </h1>
              <a className="button button-secondary" href="#projects">
                프로젝트 목록으로
              </a>
            </section>
          )
        ) : (
          <>
            <section className="intro" aria-labelledby="profile-title">
              <div className="intro-copy">
                <p className="eyebrow">DEVELOPER PORTFOLIO</p>
                <div className="profile-heading">
                <img
                  className="profile-photo"
                  src="./images/profile.jpg"
                  alt="박준영 증명사진"
                  width={96}
                  height={128}
                />

                <div className="profile-heading-text">
                  <div className="name-line">
                    <h1 id="profile-title">{profile.name}</h1>
                    <span>{profile.englishName}</span>
                  </div>
                  <p className="intro-field">{profile.field}</p>
                </div>
              </div>
                <p className="intro-description">{profile.introduction}</p>
                <div className="intro-links">
                  <ExternalLink
                    href={profile.github}
                    className="button button-primary"
                  >
                    GitHub
                  </ExternalLink>
                  <a
                    className="button button-secondary"
                    href={`mailto:${profile.email}`}
                  >
                    이메일
                  </a>
                </div>
              </div>

              <aside className="profile-summary" aria-label="학력 요약">
                <p className="summary-caption">학력</p>
                <h2>{profile.school}</h2>
                <div className="degree-list">
                  <p className="primary-major">
                    <span>본전공</span>
                    <strong>{profile.major}</strong>
                  </p>
                  <p className="micro-degree">
                    <span>마이크로디그리</span>
                    {profile.microDegree}
                  </p>
                </div>
                <dl>
                  <div className="graduation-row">
                    <dt>졸업</dt>
                    <dd>
                      {profile.graduation}
                      <span>{profile.graduationNote}</span>
                    </dd>
                  </div>
                  <div className="gpa-row">
                    <dt>학점</dt>
                    <dd className="gpa">
                      <strong>{profile.gpa}</strong>
                      <span>/ {profile.gpaScale}</span>
                      <span>
                        (전공 {profile.majorGpa} / {profile.majorGpaScale})
                      </span>
                    </dd>
                  </div>
                </dl>
              </aside>
            </section>

            <section
              className="content-section"
              id="projects"
              aria-labelledby="projects-title"
            >
              <SectionHeading
                number="01"
                id="projects-title"
                title="프로젝트"
                description="프로젝트를 선택하면 구현 과정과 상세 내용을 볼 수 있습니다."
              />

              {projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </section>

            <section
              className="content-section"
              id="skills"
              aria-labelledby="skills-title"
            >
              <SectionHeading
                number="02"
                id="skills-title"
                title="기술"
                description="프로젝트 활용 맥락과 사용·학습 경험을 구분했습니다."
              />

              <dl className="skills-list">
                {skills.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <dt>{skill.name}</dt>

                    <dd>
                      <p className="skill-technologies">
                        {skill.technologies}
                      </p>

                      <p className="skill-context">
                        {skill.context}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section
              className="content-section"
              id="certification"
              aria-labelledby="certification-title"
            >
              <SectionHeading
                number="03"
                id="certification-title"
                title="자격증"
                description="보유 중인 자격증과 취득 시기입니다."
              />

              <dl className="skills-list">
                {certifications.map((certification) => (
                  <div className="skill-row" key={certification.name}>
                    <dt>{certification.name}</dt>
                    <dd>
                      <p className="skill-technologies">
                        {certification.technologies}
                      </p>

                      <p className="skill-context">
                        {certification.dateLabel}:{" "}
                        {certification.date ? (
                          <time dateTime={certification.date.replaceAll(".", "-")}>
                            {certification.date}
                          </time>
                        ) : (
                          "확인 필요"
                        )}
                      </p>

                      {certification.certificateNumber && (
                        <p className="skill-context">
                          {certification.numberLabel}: {certification.certificateNumber}
                        </p>
                      )}

                      <p className="skill-context">
                        발급처: {certification.issuer}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section
              className="content-section"
              id="experience"
              aria-labelledby="experience-title"
            >
              <SectionHeading
                number="04"
                id="experience-title"
                title="경험 및 활동"
                description="연구실 실습과 교내 활동 기록입니다."
              />

              <div className="experience-list">
                {experiences.map((experience) => (
                  <article
                    className="experience-row"
                    key={experience.name}
                  >
                    <div>
                      <h3>{experience.name}</h3>

                      <p className="experience-period">
                        {experience.period}
                      </p>
                    </div>

                    <div>
                      <p className="experience-role">
                        {experience.role}
                      </p>

                      <p className="experience-description">
                        {experience.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>


          </>
        )}
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-inner">
          <div>
            <h2>연락처</h2>
            <p>
              {profile.name} · {profile.englishName}
            </p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {profile.englishName}</span>
          <a href="#top">맨 위로 ↑</a>
        </div>
      </footer>
    </div>
  );
}
