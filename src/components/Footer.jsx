import ExternalLink from "./ExternalLink.jsx";

export default function Footer({ profile }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <div>
          <h2>연락처</h2>
          <p>{profile.name} · {profile.englishName}</p>
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
  );
}
