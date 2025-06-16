// 과제 상세 페이지

import React from "react";
import fs from "fs";
import path from "path";

type Project = {
  id: string;
  title: string;
  level: string;
  description: string;
  tech: string[];
};

// SSG를 위한 URL 경로 미리 생성
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects: Project[] = JSON.parse(jsonData);

  return projects.map((project) => ({
    id: project.id,
  }));
}

// 실제 상세 페이지
export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects: Project[] = JSON.parse(jsonData);
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div className="p-10 text-red-500">해당 과제를 찾을 수 없습니다.</div>;
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{project.title}</h1>
      <p className="text-sm text-gray-600 mb-2">난이도: {project.level}</p>
      <p className="text-gray-800 mb-4">{project.description}</p>
      <div className="text-sm text-gray-500">
        사용 기술: {project.tech.join(", ")}
      </div>
    </main>
  );
}
