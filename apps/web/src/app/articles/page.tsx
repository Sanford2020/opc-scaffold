"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { apiClient } from "@/lib/api";
import type { Article } from "@/types/kidsbond";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get<{ success: boolean; data: Article[] }>("/api/v1/articles")
      .then((res) => setArticles(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-200 border-t-primary-500" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">育儿文章</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          科学育儿理念与实用陪伴技巧，助你成为更好的父母
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="group rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:bg-gray-900"
          >
            <div className="mb-4 text-5xl">{article.cover_emoji}</div>
            <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
              {article.category}
            </span>
            <h2 className="mt-3 text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
              {article.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
              {article.summary}
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs text-gray-400">
              <BookOpen className="h-3.5 w-3.5" />
              {article.read_time_minutes} 分钟阅读
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
