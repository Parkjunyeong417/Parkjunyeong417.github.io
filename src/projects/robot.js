export default {
  id: "patrol-robot",
  category: "졸업 프로젝트",
  title: "Autonomous AI Patrol Robot",
  period: "2026.03 ~ 2026.11 예정",
  status: "개발 진행 중",
  role: "관제 화면 · ROS 2 연동 · 자율주행 공동 개발",
  team: "2인 팀",
  summary:
    "Raspberry Pi 기반 모바일 로봇에 LiDAR와 카메라를 결합하고 ROS 2 환경에서 자율주행과 이상상황 탐지를 수행하는 AI 순찰 로봇을 개발하고 있습니다. 로봇 상태와 카메라 영상을 확인할 수 있는 관제 화면 구현, ROS 2 데이터 연동, 자율주행 기능 개발에 참여하고 있습니다.",
  contributions: [
    "로봇 카메라 영상과 장치 상태를 표시하는 관제 화면 구현",
    "ROS 2 기반 센서 및 상태 데이터를 관제 화면과 연동",
    "LiDAR 기반 SLAM 및 Localization 테스트",
    "Nav2 기반 자율주행 기능 공동 개발",
    "Vision AI 탐지 결과를 관제 시스템에서 확인할 수 있도록 연동",
    "Raspberry Pi 기반 하드웨어와 ROS 2 시스템 통합 테스트",
  ],
  result: "관제·주행·탐지 기능 통합 진행",
  scope:
    "관제·센서·주행·탐지 기능을 연결하고 검증하는 단계입니다. 완성된 상용 시스템이나 배포 완료 제품이 아닌 진행 중인 졸업작품입니다.",
  stack: [
    "Python",
    "Flask",
    "ROS 2",
    "Nav2",
    "LiDAR SLAM",
    "YOLO",
    "Raspberry Pi",
  ],
  link: "https://github.com/jcy9066/dabom_capstone",
  sections: [
    {
      title: "프로젝트 목표",
      paragraphs: [
        "이동형 로봇이 지정 구역을 순찰하면서 주변 환경을 인식하고, 관제 사용자가 로봇 상태와 이상상황을 확인할 수 있는 통합 시스템을 목표로 합니다.",
      ],
    },
    {
      title: "전체 시스템 구성",
      paragraphs: [
        "Raspberry Pi 기반 모바일 로봇, LiDAR와 카메라 센서, ROS 2 노드, Nav2 주행 기능, Vision AI 탐지 결과, Flask 기반 관제 웹 환경을 연결하는 구조입니다.",
      ],
    },
    {
      title: "관제 화면",
      paragraphs: [
        "카메라 영상과 로봇 장치 상태를 한 화면에서 확인할 수 있도록 관제 UI를 구현하고 있습니다. 탐지 결과와 주행 상태도 관제 흐름에서 확인할 수 있도록 연결합니다.",
      ],
    },
    {
      title: "ROS 2 및 센서 연동",
      paragraphs: [
        "ROS 2에서 전달되는 센서 및 상태 데이터를 관제 화면에서 사용할 수 있는 형태로 연결하고, 데이터 갱신과 표시 동작을 통합 테스트하고 있습니다.",
      ],
    },
    {
      title: "LiDAR SLAM / Localization",
      paragraphs: [
        "LiDAR 기반 지도 생성과 Localization 동작을 테스트하며, 실제 주행 환경에서 로봇 위치가 안정적으로 추정되는지 확인하고 있습니다.",
      ],
    },
    {
      title: "Nav2 자율주행",
      paragraphs: [
        "Nav2 기반 목표 지점 이동과 경로 실행을 공동 개발하고 있습니다. 전체 주행 구조를 단독 설계한 것이 아니라 팀 단위로 기능을 연결하고 검증하는 범위입니다.",
      ],
    },
    {
      title: "Vision AI 이상상황 탐지",
      paragraphs: [
        "카메라 영상의 Vision AI 탐지 결과를 관제 시스템에서 확인할 수 있도록 연동하고 있습니다. 모델 전체를 직접 학습한 것으로 표현하지 않습니다.",
      ],
    },
    {
      title: "시스템 통합",
      paragraphs: [
        "Raspberry Pi 하드웨어, ROS 2 데이터, 주행 기능과 관제 웹 환경을 연결해 각 구성 요소가 함께 동작하는지 테스트하고 있습니다.",
      ],
    },
    {
      title: "현재 개발 상태와 남은 작업",
      paragraphs: [
        "현재 관제·주행·탐지 기능의 통합을 진행하고 있습니다. 센서 환경별 안정성 확인과 전체 순찰 시나리오 검증은 남은 작업입니다.",
      ],
    },
  ],
  images: [],
  evidence: [],
};
