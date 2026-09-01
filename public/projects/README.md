# 프로젝트 이미지

## PDF 증빙 문서

참가 확인증, 상장 등은 프로젝트별 `documents` 폴더에 넣고, 해당 프로젝트 파일의 `evidence` 배열에 등록합니다.

```js
evidence: [{
  src: "projects/yogiyo/documents/participation.pdf",
  title: "참가 확인증",
  description: "Oracle AI Hackathon",
  issuer: "주최 기관",
  date: "2026.08",
  type: "PDF",
}]
```

문서를 하나 이상 등록하면 상세 페이지에 증빙 문서 목록이 자동으로 표시됩니다.

필요할 때 `yogiyo`, `robot`, `uni` 폴더를 만들고 해당 프로젝트의 실제 화면 이미지를 넣으세요.
이미지 파일은 아직 포함되어 있지 않습니다.

예: `public/projects/yogiyo/customer.png`

해당 프로젝트 내용 파일의 `images` 항목에는 `projects/yogiyo/customer.png`로 적습니다.
