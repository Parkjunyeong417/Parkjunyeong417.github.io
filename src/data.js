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
  graduation: "2027년 졸업 예정",
  graduationNote: "2학기 조기졸업 예정",
  gpa: "4.11",
  gpaScale: "4.5",
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
      "역할별 웹 화면과 API 응답 기반 상태 표시. React는 이 포트폴리오에 사용했습니다.",
  },
  {
    name: "Backend / Data",
    technologies: "Python · FastAPI · Flask · SQL · Oracle Database",
    context:
      "FastAPI 연동, Flask 관제 시스템 개발, 데이터베이스·SQL 학습 및 활용.",
  },
  {
    name: "Robotics / AI",
    technologies: "ROS 2 · Nav2 · LiDAR SLAM · YOLO · OCI GenAI",
    context:
      "로봇 관제·자율주행 공동 개발과 AI 기능 연동. 전체 시스템 검증은 진행 중입니다.",
  },
  {
    name: "기타 사용·학습",
    technologies: "Git · GitHub · Linux · Docker · Oracle Cloud · Raspberry Pi",
    context: "C · C++ · C# · Java · Dart · Flutter · MySQL · Kafka · Redis",
  },
];

export const certifications = [
  {
    name: "SQLD",
    technologies: "SQL 개발자 · 취득 가정",
    date: "",
    dateLabel: "취득일",
    certificateNumber: "",
    numberLabel: "자격번호",
    context:
      "SQL 개발자 자격입니다. 실제 취득일과 자격번호는 증빙 확인 후 입력해야 합니다.",
  },
  {
    name: "ADsP",
    technologies: "데이터 분석 준전문가",
    date: "2026.06.05",
    dateLabel: "합격일",
    certificateNumber: "ADsP-049022871",
    numberLabel: "자격번호",
    context:
      "한국데이터산업진흥원이 시행하는 데이터 분석 분야의 국가공인 자격입니다.",
  },
  {
    name: "MOS 2016 Master",
    technologies: "Microsoft Office Specialist Master",
    date: "2024.01.10",
    dateLabel: "취득일",
    certificateNumber: "wUvnF-22us",
    numberLabel: "인증코드",
    context:
      "Word 2016 Expert, Excel 2016 Expert, PowerPoint 2016, Access 2016의 인증 요건을 충족한 Microsoft Office Specialist Master입니다.",
  },
  {
    name: "TOEIC Speaking",
    technologies: "130점 · Intermediate Mid 3 (IM3)",
    date: "2026.02.28",
    dateLabel: "시험일",
    certificateNumber: "102576",
    numberLabel: "수험번호",
    context:
      "영어 말하기 평가에서 130점, IM3 등급을 취득했습니다. 성적표에 기재된 유효기간은 2028.02.28까지입니다.",
  },
  {
    name: "TOEIC",
    technologies: "650점 · Listening 345 / Reading 305",
    date: "2025.08.31",
    dateLabel: "시험일",
    certificateNumber: "133194",
    numberLabel: "수험번호",
    context:
      "영어 듣기·읽기 평가에서 총 650점을 취득했습니다. 성적표에 기재된 유효기간은 2027.08.31까지입니다.",
  },
  {
    name: "자동차운전면허 1종 대형",
    technologies: "제1종 대형 운전면허",
    date: "2023.09.06",
    dateLabel: "면허 발급일",
    certificateNumber: "13-21-606259-10",
    numberLabel: "운전면허번호",
    context:
      "운전경력증명서에 기재된 제1종 대형 운전면허 보유 내역입니다.",
  },
  {
    name: "컴퓨터활용능력 1급 필기",
    technologies: "필기시험 합격 · 최종 자격 취득 아님",
    date: "2026.02.11",
    dateLabel: "필기 합격일",
    certificateNumber: "10-019994",
    numberLabel: "필기 합격확인서상 자격번호",
    context:
      "대한상공회의소 컴퓨터활용능력 1급 필기시험 합격 내역입니다. 실기시험 합격을 포함한 최종 자격 취득과는 구분됩니다.",
  },
];


export const experiences = [
  {
    name: "AI Convergence Research Center",
    role: "학부연구생 인턴",
    period: "2025.09.16 — 2025.11.23",
    description:
      "딥러닝 논문을 읽고 주요 개념과 모델 구조를 정리했습니다. Python 실습으로 모델의 학습·추론 과정을 경험했습니다.",
  },
  {
    name: "Orakok",
    role: "컴퓨터공학과 배드민턴 소모임",
    period: "1학년 1학기 — 2학년 1학기",
    description: "정기 활동에 참여했으며, 2학년 1학기 회장을 맡았습니다.",
  },
  {
    name: "K.B. · Konkuk Badminton",
    role: "교내 배드민턴 동아리 활동",
    period: "2학년 2학기 — 3학년 2학기",
    description: "교내 배드민턴 동아리 활동에 참여했습니다.",
  },
];
