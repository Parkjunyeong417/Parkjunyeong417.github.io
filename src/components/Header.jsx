export default function Header({ profile }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" aria-label="박준영 포트폴리오 처음으로">
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
  );
}
