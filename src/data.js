import yogiyo from "./projects/yogiyo.js";
import robot from "./projects/robot.js";
import uni from "./projects/uni.js";

export const profile = {
  name: "박준영",
  englishName: "Junyeong Park",
  field: "웹 개발 · AI 서비스 · 로봇 관제",
  introduction:
    "고객·점주·라이더의 주문 흐름을 연결하는 웹 화면을 구현했습니다. 현재는 자율 순찰 로봇의 관제 화면과 센서 데이터 연동을 개발하고 있습니다.",
  school: "건국대학교 GLOCAL캠퍼스",
  major: "컴퓨터공학과",
  microDegree: "인공지능 전문가 양성과정",
  graduation: "2027년 졸업 예정",
  graduationNote: "2학기 조기졸업 예정",
  gpa: "4.11",
  gpaScale: "4.5",
  majorGpa: "4.14",
  majorGpaScale: "4.5",
  email: "prakjun417@gmail.com",
  github: "https://github.com/Parkjunyeong417",
  // 취득을 가정한 요청을 반영했습니다. 실제 취득 확인 후 공개하세요.
  certification: "SQLD · SQL 개발자",
};

export const projects = [yogiyo, robot, uni];

export const skills = [
  {
    name: "Frontend",
    technologies: "JavaScript · HTML · CSS · React · Vite",
    context:
      "역할별 웹 화면 구현과 REST API 응답 기반 상태 표시를 경험했으며, React와 Vite는 현재 포트폴리오 구현에 사용했습니다.",
  },
  {
    name: "Data / API Integration",
    technologies: "Python · SQL · Oracle Database · REST API",
    context:
      "SQL 기반 데이터 활용 경험과 프로젝트에서 REST API 응답을 프론트엔드 화면 상태에 연동한 경험이 있습니다.",
  },
  {
    name: "Robotics / AI",
    technologies: "ROS 2 · Nav2 · LiDAR SLAM · YOLO · OCI GenAI",
    context:
      "로봇 관제·자율주행 공동 개발과 AI 기능 연동. 전체 시스템 검증은 진행 중입니다.",
  },
  {
    name: "Tools / Environment",
    technologies: "Git · GitHub · Linux · Docker · Oracle Cloud · Raspberry Pi",
    context:
      "프로젝트 버전 관리, 개발 환경 구성, 클라우드 데모와 로봇 시스템 통합 과정에서 사용했습니다.",
  },
];

export const certifications = [
/*  {
    name: "SQLD",
    technologies: "SQL 개발자",
    date: "2026.09.11",
    dateLabel: "취득일",
    issuer: "한국데이터산업진흥원(Kdata)",
  },*/
  {
    name: "ADsP",
    technologies: "데이터 분석 준전문가",
    date: "2026.06.05",
    dateLabel: "취득일",
    issuer: "한국데이터산업진흥원(Kdata)",
  },
  {
    name: "MOS 2016 Master",
    technologies: "Microsoft Office Specialist Master",
    date: "2024.01.10",
    dateLabel: "취득일",
    issuer: "마이크로소프트(Microsoft)",
  },
  {
    name: "TOEIC Speaking",
    technologies: "130점 · Intermediate Mid 3 (IM3)",
    date: "2026.02.28",
    dateLabel: "시험일",
    issuer: "한국TOEIC위원회(YBM)",
  },
  {
    name: "TOEIC",
    technologies: "650점 · Listening 345 / Reading 305",
    date: "2025.08.31",
    dateLabel: "시험일",
    issuer: "한국TOEIC위원회(YBM)",
  },
  {
    name: "자동차운전면허 1종 대형",
    technologies: "제1종 대형 운전면허",
    date: "2023.09.06",
    dateLabel: "면허 발급일",
    issuer: "경기도남부경찰청",
  },
];


export const experiences = [
  {
    name: "AI Convergence Research Center",
    role: "학부연구생 인턴",
    period: "2025.09.19 ~ 2025.11.02",
    description:
      "딥러닝 관련 논문을 읽고 주요 개념과 모델 구조를 정리했으며, Python 실습을 통해 모델의 학습·추론 과정을 경험했습니다.",
  },
  {
    name: "인공지능 전문가 양성과정",
    role: "컴퓨터공학과 마이크로디그리 · 총 13학점",
    period: "2026",
    description:
      "인공지능의 기본 원리부터 기계학습·딥러닝·클라우드·AI 프로젝트 운영까지 단계적으로 학습하는 과정입니다. 인공지능기초와 기계학습을 이수했으며, 현재 Nano-LAB심화2, 클라우드컴퓨팅, 딥러닝을 이수 중입니다.",
    courses: [
      {
        name: "인공지능기초",
        credits: 3,
        status: "이수 완료",
        summary:
          "인공지능의 기본 개념과 신경망을 시작으로 컴퓨터 비전, 자연어 처리, Transformer·LLM, 강화학습과 AI 윤리까지 주요 AI 기술의 기초를 이론과 실습을 통해 학습했습니다.",
      },
      {
        name: "기계학습",
        credits: 3,
        status: "이수 완료",
        summary:
          "회귀·분류·클러스터링 등 기계학습의 주요 알고리즘과 자연어 처리, 시계열 분석, 강화학습의 기초를 학습하고 Python 기반 실습과 모델 활용 웹앱 개발을 경험했습니다.",
      },
      {
        name: "Nano-LAB심화2(컴퓨터공학)",
        credits: 1,
        status: "2026년 2학기 이수 중",
        summary:
          "AI 프로젝트의 문제 정의부터 데이터·모델 관리, 배포·모니터링·유지보수까지 전체 생애주기를 학습하고 있으며, 이해관계자·리스크·조직 준비도와 MLOps 관점에서 프로젝트를 기획하고 운영하는 방법을 실습하고 있습니다.",
      },
      {
        name: "클라우드컴퓨팅",
        credits: 3,
        status: "2026년 2학기 이수 중",
        summary:
          "AWS를 중심으로 컴퓨팅·스토리지·데이터베이스·네트워크·모니터링 등 클라우드 서비스의 기본 구조를 학습하고 있으며, SageMaker 기반 머신러닝 파이프라인과 클라우드 환경의 MLOps 활용까지 실습하고 있습니다.",
      },
      {
        name: "딥러닝",
        credits: 3,
        status: "2026년 2학기 이수 중",
        summary:
          "PyTorch를 활용해 신경망의 학습 과정과 모델 평가·개선 방법을 학습하고 있으며, CNN·RNN·Transformer와 텍스트 처리, 딥 강화학습까지 단계적으로 실습하고 있습니다.",
      },
    ],
  },
  {
    name: "교내 배드민턴 활동",
    role: "Orakok 회장 · K.B. 동아리 활동",
    period: "2024년 1학기 ~ 2025년 2학기",
    description:
      "컴퓨터공학과 배드민턴 소모임 Orakok에서 활동했으며, 2025년 1학기 회장을 맡아 소모임 운영을 담당했습니다. 이후 교내 배드민턴 동아리 K.B.에서도 활동했습니다.",
  },
];
