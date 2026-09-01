# Park Junyeong Portfolio

프론트엔드 구현, AI 기능·REST API 연동, ROS 2 기반 로봇 프로젝트의 담당 범위와 학습 과정을 소개하는 개인 포트폴리오입니다.

## Tech Stack

- React 19, JavaScript
- Vite 7
- CSS
- GitHub Actions, GitHub Pages

## Project Structure

```text
.
├─ .github/workflows/deploy.yml  # GitHub Pages 배포
├─ public/
│  ├─ images/                    # 프로필·공유 이미지
│  └─ projects/                  # 프로젝트별 이미지·증빙 자료
├─ src/
│  ├─ components/                # 화면 컴포넌트
│  ├─ projects/                  # 프로젝트 상세 데이터
│  ├─ App.jsx                    # 해시 라우팅과 화면 구성
│  ├─ data.js                    # 프로필·기술·자격·경험 데이터
│  └─ styles.css                 # 반응형·인쇄 스타일
├─ index.html                    # SEO 메타데이터와 앱 진입점
└─ vite.config.js
```

## Local Development

```bash
npm install
npm run dev
```

Vite가 출력하는 로컬 주소에서 메인 화면과 프로젝트 상세 해시 경로를 확인할 수 있습니다.

## Build

```bash
npm run build
npm run preview
```

프로덕션 결과물은 `dist/`에 생성됩니다.

## GitHub Pages Deployment

기본 브랜치에 변경 사항을 푸시하면 `.github/workflows/deploy.yml`이 Vite 빌드 결과를 GitHub Pages에 게시합니다. 저장소의 Pages Source는 **GitHub Actions**로 설정해야 합니다.

## Project Assets

프로젝트 자산은 `public/projects/<project-id>/images/`와 `documents/`에 둡니다. 실제 파일을 추가한 뒤 각 `src/projects/*.js`의 `images` 또는 `evidence` 배열에 `/projects/...` 형식의 공개 경로를 등록합니다.

공개 전에는 이미지와 PDF에서 학번, 주소, 연락처, 계정번호, 인증번호, API 키, IP 주소 등 불필요한 개인정보를 제거해야 합니다. 실제 자료가 없는 항목에는 임시 이미지나 증빙을 연결하지 않습니다.

## Portfolio URL

[https://parkjunyeong417.github.io/](https://parkjunyeong417.github.io/)
