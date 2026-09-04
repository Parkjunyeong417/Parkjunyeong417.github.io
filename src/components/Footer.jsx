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
          <ExternalLink
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
          >
            {profile.email}
          </ExternalLink>
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
