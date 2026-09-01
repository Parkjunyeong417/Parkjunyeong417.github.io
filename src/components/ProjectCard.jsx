export default function ProjectCard({ project }) {
  return (
    <article className="project" id={project.id} aria-labelledby={`${project.id}-title`}>
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
        <div><dt>담당 역할</dt><dd>{project.role}</dd></div>
        <div><dt>참여 형태</dt><dd>{project.team}</dd></div>
      </dl>
      <p className="project-summary">{project.summary}</p>
      <div className="project-footer">
        <ul className="tech-list" aria-label="사용 기술 및 기획 도구">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
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
