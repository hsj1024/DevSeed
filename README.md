
# 🌱 DevSeed - 신입 개발자를 위한 실전 과제 플랫폼

DevSeed는 신입 개발자들이 실전 과제를 경험하고 포트폴리오를 쌓을 수 있도록 돕는 웹 플랫폼입니다.  
실제 과제를 수행하고 제출하여 경력을 쌓고, 클라이언트나 멘토와 연결될 수 있는 구조를 지향합니다.

---

## 🛠 기술 스택

- Next.js (App Router 기반)
- React + TypeScript
- Tailwind CSS
- (예정) Firebase Auth + Firestore

---

## ✅ 현재 구현된 기능

| 기능 이름       | 경로                    | 설명                                  |
|----------------|-------------------------|---------------------------------------|
| 홈 페이지       | `/`                     | 소개 및 기본 안내                     |
| 과제 리스트     | `/projects`             | 과제 카드 목록 표시 (`projects.json` 기반) |
| 과제 상세 페이지 | `/projects/[id]`        | 개별 과제 내용 및 사용 기술 표시      |
| 과제 제출 폼    | `/submit`               | 이름, GitHub 링크, 설명 입력          |
| 제출 내역 보기  | `/submissions`          | 샘플 제출 데이터 표시                 |

---

## 🔮 다음에 개발할 기능

- [ ] Firebase를 통한 Google 로그인 연동
- [ ] 과제 제출 데이터를 Firestore에 저장
- [ ] 제출 완료 후 자동 리디렉션 (`/submissions`)
- [ ] 실시간 제출 내역 확인
- [ ] 포트폴리오 자동 생성 기능

---

## 📂 폴더 구조

```

app/
├── layout.tsx
├── page.tsx                  # 홈
├── projects/
│   ├── page.tsx              # 과제 리스트
│   └── \[id]/page.tsx         # 과제 상세
├── submit/page.tsx           # 제출 폼
└── submissions/page.tsx      # 제출 내역
data/
└── projects.json             # 과제 목록 데이터
styles/
└── globals.css               # Tailwind CSS 설정

````

---

## ▶ 실행 방법

```bash
git clone https://github.com/your-username/devseed.git
cd devseed
npm install
npm run dev
````

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

---

## 👤 제작자

* 이름: 황서정
* 이 프로젝트는 실전 학습용으로 제작되었으며, 포트폴리오 및 실무 경험 축적에 활용 가능합니다.

---
