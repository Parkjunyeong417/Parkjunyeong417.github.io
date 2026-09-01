import SectionHeading from "./SectionHeading.jsx";

export default function ExperienceSection({ experiences }) {
  return (
    <section className="content-section" id="experience" aria-labelledby="experience-title">
      <SectionHeading number="04" id="experience-title" title="경험 및 활동" description="연구 경험, AI 교육과정과 교내 활동 기록입니다." />
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-row" key={experience.name}>
            <div>
              <h3>{experience.name}</h3>
              <p className="experience-period">{experience.period}</p>
            </div>
            <div>
              <p className="experience-role">{experience.role}</p>
              <p className="experience-description">{experience.description}</p>
              {experience.courses?.length > 0 && (
                <details className="course-details">
                  <summary>과목별 이수 내용 보기</summary>
                  <ul className="course-list">
                    {experience.courses.map((course) => (
                      <li key={course.name}>
                        <div className="course-heading">
                          <strong>{course.name}</strong>
                          <span>{course.credits}학점 · {course.status}</span>
                        </div>
                        <p>{course.summary}</p>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
