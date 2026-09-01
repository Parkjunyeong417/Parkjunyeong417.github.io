import ExternalLink from "./ExternalLink.jsx";

export default function ProfileSection({ profile }) {
  return (
    <section className="intro" aria-labelledby="profile-title">
      <div className="intro-copy">
        <p className="eyebrow">DEVELOPER PORTFOLIO</p>
        <div className="profile-heading">
          <img
            className="profile-photo"
            src="/images/profile.jpg"
            alt="박준영 프로필 사진"
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
          <ExternalLink href={profile.github} className="button button-primary">
            GitHub
          </ExternalLink>
          <a className="button button-secondary" href={`mailto:${profile.email}`}>
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
            <dd>{profile.graduation}<span>{profile.graduationNote}</span></dd>
          </div>
          <div className="gpa-row">
            <dt>학점</dt>
            <dd className="gpa">
              <strong>{profile.gpa}</strong>
              <span>/ {profile.gpaScale}</span>
              <span>(전공 {profile.majorGpa} / {profile.majorGpaScale})</span>
            </dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
