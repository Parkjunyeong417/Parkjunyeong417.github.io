import SectionHeading from "./SectionHeading.jsx";

export default function SkillsSection({ skills }) {
  return (
    <section className="content-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading number="02" id="skills-title" title="기술" description="프로젝트 활용 맥락과 사용·학습 경험을 구분했습니다." />
      <dl className="skills-list">
        {skills.map((skill) => (
          <div className="skill-row" key={skill.name}>
            <dt>{skill.name}</dt>
            <dd>
              <p className="skill-technologies">{skill.technologies}</p>
              <p className="skill-context">{skill.context}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
