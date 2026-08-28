# 박준영 포트폴리오

별도 백엔드 서버 없이 GitHub Pages에서 동작하는 React 포트폴리오입니다.
메인에는 핵심 요약을, 프로젝트별 상세 화면에는 구현 과정과 설명을 담습니다.

## 반영한 내용

- 상단 이름: 박준영. 별도 로고나 이니셜 심볼 없음.
- 학점: 4.11 / 4.5.
- K.B.: 교내 배드민턴 동아리 활동. 부회장 경력 없음.
- 요기요 × Oracle 해커톤: 본선 Top 8. 수상·우승으로 표기하지 않음.
- 졸업작품: 개발 진행 중.
- SQLD: 사용자가 요청한 취득 가정을 반영. 실제 취득 여부 확인 후 공개.
- 상세 본문은 확인된 기본 내용만 작성. 설명과 이미지는 추가 가능.

## GitHub Pages에 올리기

1. 압축을 풀고 `junyeong-portfolio` 폴더 안의 소스 파일을 저장소 최상위에 넣습니다.
   `package.json`, `index.html`, `src`, `.github`가 저장소 최상위에 있어야 합니다.
   `junyeong-portfolio`라는 상위 폴더째 넣지 마세요.
2. 저장소의 **Settings → Pages → Build and deployment → Source**에서
   **GitHub Actions**를 선택합니다.
3. 기본 브랜치에 변경 내용을 저장하면 포함된 작업 설정이 자동으로 빌드·게시합니다.
   이미 업로드한 뒤 Pages 설정을 바꿨다면 **Actions → Deploy portfolio to GitHub Pages
   → Run workflow**에서 기본 브랜치로 실행하세요.
4. Actions의 게시 작업이 완료되면 Settings → Pages에 표시되는 주소로 접속합니다.

개인 사이트 저장소 이름이 `Parkjunyeong417.github.io`라면 해당 GitHub Pages 주소에서
확인할 수 있습니다. 기본 브랜치 이름은 작업 설정이 자동으로 확인합니다.

이 포트폴리오는 GitHub Pages 게시용입니다. 내 컴퓨터에서 서버를 켜 두거나
`npm run dev`를 실행할 필요가 없습니다. React 소스는 GitHub에서 정적 파일로
변환합니다. 소스 `index.html`을 더블클릭해 여는 방식은 지원하지 않습니다.

공식 참고: [Vite의 GitHub Pages 배포 안내](https://vite.dev/guide/static-deploy.html#github-pages)

## 파일 구성

| 파일 또는 폴더 | 내용 |
| --- | --- |
| `index.html` | 페이지 제목과 진입점 |
| `package.json` | React 및 빌드 도구 설정 |
| `vite.config.js` | 정적 파일 빌드 설정 |
| `.github/workflows/deploy.yml` | GitHub Pages 자동 게시 |
| `src/main.jsx` | React 시작점 |
| `src/App.jsx` | 메인·프로젝트 상세 화면과 이동 처리 |
| `src/data.js` | 이름·학점·학력·자격·기술·활동 |
| `src/projects/yogiyo.js` | 요기요 × Oracle 프로젝트 내용 |
| `src/projects/robot.js` | 자율 순찰 로봇 프로젝트 내용 |
| `src/projects/uni.js` | AI 튜터 UNI 프로젝트 내용 |
| `src/styles.css` | 화면 디자인·반응형·인쇄 스타일 |
| `public/projects/` | 나중에 추가할 프로젝트 화면 이미지 |
| `dist/` | 빌드가 완료된 HTML·CSS·JavaScript |

## 프로젝트 상세 내용 작성

해당 프로젝트 파일의 `sections`에 항목을 추가하면 상세 화면에 순서대로 표시됩니다.

```js
{
  title: "기술적 판단",
  paragraphs: [
    "당시의 문제 상황을 작성합니다.",
    "비교했던 대안과 선택 이유, 본인이 구현한 부분을 작성합니다.",
  ],
  bullets: [
    "구현 과정에서 확인한 내용",
    "검증 방법과 실제로 측정한 결과",
  ],
}
```

`title`은 소제목, `paragraphs`는 문단, `bullets`는 목록입니다.
프로젝트의 `summary`는 메인 요약에도 사용됩니다.
`contributions`는 본인 업무, `result`는 결과, `scope`는 검증 범위와 현재 상태입니다.
아직 완료하지 않은 작업이나 확인되지 않은 성과를 완료 실적으로 적지 마세요.

## 이미지 추가

1. 이미지를 `public/projects/yogiyo/customer.png`처럼 저장합니다.
2. 프로젝트 파일의 `images`에 다음 항목을 추가합니다.

```js
images: [
  {
    src: "projects/yogiyo/customer.png",
    alt: "고객 주문 상태 화면",
    caption: "주문 진행 단계에 따른 상태 표시",
  },
],
```

`src`에는 `public/`이나 맨 앞의 `/`를 붙이지 않습니다.
이미지를 등록하지 않으면 이미지 섹션은 표시되지 않습니다.

## 상세 화면 주소

- `#/projects/yogiyo`
- `#/projects/patrol-robot`
- `#/projects/uni`

해시 주소를 사용하므로 상세 화면에서 새로고침해도 별도의 서버 경로 설정이 필요하지 않습니다.

## 빌드된 파일만 사용하는 방법

직접 빌드하거나 Actions를 사용하지 않고 현재 완성본만 올리려면,
`dist` 안의 `index.html`과 `assets`를 GitHub Pages의 게시 대상 폴더에 함께 넣습니다.
이 경우 Pages의 Source는 **Deploy from a branch**로 설정하고 해당 브랜치·폴더를 선택합니다.
소스 코드를 나중에 수정하면 다시 빌드해야 하므로, 계속 내용을 작성할 때는 위의
GitHub Actions 방식을 권장합니다.

## 검증

- 정적 프로덕션 빌드 완료.
- 사실관계·상세 내용 출력·정적 자산·CSS·게시 설정 검사 10개 통과.
- 데스크톱·모바일 반응형 CSS와 인쇄 스타일 포함.
- 실제 GitHub 저장소 게시와 브라우저 시각 검사는 수행하지 않았습니다.

개인정보와 SQLD 취득 여부를 최종 확인한 뒤 공개하세요.
