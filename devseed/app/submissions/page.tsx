// 제출 내역 확인 페이지 

import React from "react";

// 샘플 제출 데이터 (나중에 Firebase에서 가져오도록 확장 가능)
const submissions = [
  {
    name: "홍길동",
    github: "https://github.com/hong/devseed-project",
    description: "Todo 앱 구현 및 다크모드 추가",
  },
  {
    name: "이순신",
    github: "https://github.com/soonshin/flower-shop",
    description: "예약 시스템에 달력 컴포넌트 연동 완료",
  },
];

export default function SubmissionsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">📦 과제 제출 내역</h1>
      <ul className="space-y-4">
        {submissions.map((item, index) => (
          <li key={index} className="border p-4 rounded-lg bg-white shadow">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">
              GitHub:{" "}
              <a
                href={item.github}
                className="text-blue-600 underline"
                target="_blank"
              >
                {item.github}
              </a>
            </p>
            <p className="mt-2 text-gray-800">{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
