import { useEffect, useSyncExternalStore } from "react";
import CertificationsSection from "./components/CertificationsSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ProfileSection from "./components/ProfileSection.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import { certifications, experiences, profile, projects, skills } from "./data.js";

function subscribeToHash(callback) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

const getHash = () => window.location.hash;
const getServerHash = () => "";

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
        return;
      }

      const target = document.getElementById(hash.slice(1) || "top");
      target?.scrollIntoView({ block: "start", behavior: "instant" });
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

      <Header profile={profile} />

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
            <ProfileSection profile={profile} />

            <section className="content-section" id="projects" aria-labelledby="projects-title">
              <SectionHeading
                number="01"
                id="projects-title"
                title="프로젝트"
                description="프로젝트를 선택하면 구현 과정과 상세 내용을 볼 수 있습니다."
              />
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </section>

            <SkillsSection skills={skills} />
            <CertificationsSection certifications={certifications} />
            <ExperienceSection experiences={experiences} />
          </>
        )}
      </main>

      <Footer profile={profile} />
    </div>
  );
}
