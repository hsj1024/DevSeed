// 과제 리스트 페이지
import React from "react";
import Link from "next/link";

import fs from "fs";
import path from "path";

type Project = {
  id: string;
  title: string;
  level: string;
  description: string;
  tech: string[];
};

export default function ProjectListPage() {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects: Project[] = JSON.parse(jsonData);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">📚 실전 과제 목록</h1>

      <ul className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <li key={project.id} className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
  <Link href={`/projects/${project.id}`}>
    <h2 className="text-xl font-semibold text-blue-600 hover:underline">
      {project.title}
    </h2>
  </Link>
  <p className="text-sm text-gray-600 mb-1">난이도: {project.level}</p>
  <p className="text-gray-800 mb-2">{project.description}</p>
  <div className="text-sm text-gray-500">
    기술: {project.tech.join(", ")}
  </div>
</li>

        ))}
      </ul>
    </main>
  );
}
