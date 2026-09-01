export default {
  id: "patrol-robot",
  category: "졸업 프로젝트",
  title: "Autonomous AI Patrol Robot",
  period: "2026.03 ~ 2026.11 예정",
  status: "개발 진행 중",
  role: "관제 화면 · 백엔드·자율주행 공동 개발",
  team: "2인 팀",
  summary:
    "카메라와 LiDAR로 주변 환경을 인식하고, 이상 상황을 관제 화면과 알림으로 전달하는 자율 순찰 로봇을 개발하고 있습니다.",
  contributions: [
    "카메라 영상과 장치 상태를 확인하는 관제 화면 개발",
    "ROS 2 기반 시스템과 관제 화면 사이의 데이터 연동 참여",
    "백엔드·자율주행 기능 공동 개발 및 시스템 통합",
  ],
  result: "관제·주행·탐지 기능 통합 진행",
  scope:
    "자율주행과 AI 탐지를 포함한 전체 시스템을 개발·검증하는 단계입니다. 완성된 상용 시스템이 아닌 진행 중인 졸업작품입니다.",
  stack: [
    "Python",
    "Flask",
    "ROS 2",
    "Nav2",
    "LiDAR SLAM",
    "YOLO",
    "Raspberry Pi",
  ],
  sections: [
    {
      title: "관제 화면과 데이터 연동",
      paragraphs: [
        "영상과 장치 상태를 사용자가 확인할 수 있도록 관제 화면을 개발하고 있습니다. ROS 2 기반 시스템과 웹 화면 사이의 데이터 연결에도 참여하고 있습니다.",
      ],
    },
    {
      title: "현재 개발 범위",
      paragraphs: [
        "백엔드 및 자율주행 기능을 공동 개발하며, 센서·관제·탐지 기능의 통합을 진행하고 있습니다. 각 기능을 연결한 전체 시스템의 동작 검증은 진행 중입니다.",
      ],
    },
  ],
  images: [],
  // Add PDF evidence after placing the file under public/projects/patrol-robot/documents/.
  evidence: [],
};
