export default {
  id: "yogiyo",
  category: "요기요 × Oracle 해커톤",
  title: "조리·배달 동기화 서비스",
  period: "2026.07.27 ~ 2026.08.25",
  status: "본선 Top 8",
  role: "프론트엔드 · LLM 연동",
  team: "2인 팀(낭만젊음사랑)",
  summary:
    "조리 완료와 라이더 도착 시점이 어긋나는 문제를 다뤘습니다. 점주의 조리시간 판단을 돕고, 이를 배차·픽업·배달의 화면 흐름에 연결한 데모입니다.",
  contributions: [
    "고객·점주·라이더의 세 가지 화면과 주문 진행 흐름 구현",
    "FastAPI 응답을 화면 상태와 연결해 조리 시작부터 배달 완료까지 반영",
    "유사 조리 사례, 매장별 남은 조리시간, 추천 방문 순서 표시 및 LLM 연동",
  ],
  result: "본선 Top 8 진출",
  scope:
    "시연 환경에서 주문·조리·배달 흐름을 구현했습니다. 실제 서비스 운영 성과나 수상 실적을 의미하지 않습니다. 백엔드·인프라는 팀원이 담당했습니다.",
  stack: ["JavaScript", "Vite", "FastAPI 연동", "Oracle 23ai", "OCI GenAI"],
  link: "https://github.com/hvvrnz/yogiyo-oracle-hackathon",
  // 상세 화면의 본문입니다. 같은 형식의 항목을 추가하면 섹션이 늘어납니다.
  sections: [
    {
      title: "세 사용자의 주문 흐름 연결",
      paragraphs: [
        "고객은 주문 진행 상황을, 점주는 조리 상태를, 라이더는 픽업과 배달 순서를 확인하도록 화면을 구성했습니다.",
        "백엔드가 전달하는 주문 상태를 각 역할의 화면에 반영하며, 조리부터 배달 완료까지 이어지는 시연 흐름을 구현했습니다.",
      ],
    },
    {
      title: "조리 판단 보조와 정보 표시",
      paragraphs: [
        "점주가 참고할 수 있는 유사 조리 사례와 라이더에게 필요한 매장별 남은 조리시간, 추천 방문 순서를 표시했습니다. AI의 활용 범위는 조리시간 판단 보조와 관련 정보 제공에 두었습니다.",
      ],
    },
  ],
  // 예: { src: "projects/yogiyo/customer.png", alt: "고객 주문 상태 화면", caption: "주문 단계별 상태 표시" }
  images: [],
  // Add PDF evidence after placing the file under public/projects/yogiyo/documents/.
  // evidence: [{ src: "projects/yogiyo/documents/participation.pdf", title: "참가 확인증", description: "Oracle AI Hackathon", issuer: "주최 기관", date: "2026.08", type: "PDF" }],
  evidence: [],
};
