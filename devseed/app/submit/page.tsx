// 제출 폼 페이지

import React from "react";

export default function SubmitPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">📤 과제 제출하기</h1>

      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1">이름</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2"
            placeholder="홍길동"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">GitHub 링크</label>
          <input
            type="url"
            name="github"
            className="w-full border rounded px-3 py-2"
            placeholder="https://github.com/yourname/project"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">설명</label>
          <textarea
            name="description"
            rows={4}
            className="w-full border rounded px-3 py-2"
            placeholder="어떤 식으로 구현했는지 간단히 적어주세요."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          제출하기
        </button>
      </form>
    </main>
  );
}
