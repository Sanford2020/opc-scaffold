"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { apiClient } from "@/lib/api";
import type { Article } from "@/types/kidsbond";

export default function ArticleDetailPage() {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.id) return;
    apiClient
      .get<{ success: boolean; data: Article }>(
        `/api/v1/articles/${params.id}`,
      )
      .then((res) => setArticle(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-200 border-t-primary-500" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-lg text-gray-500">文章未找到</p>
        <Link
          href="/articles"
          className="mt-4 inline-flex items-center gap-1 text-primary-600"
        >
          <ArrowLeft className="h-4 w-4" />
          返回文章列表
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/articles"
        className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        返回文章列表
      </Link>

      <article className="rounded-3xl border bg-white p-6 shadow-sm sm:p-10 dark:bg-gray-900">
        <div className="mb-6 text-6xl">{article.cover_emoji}</div>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-400">
            <Clock className="h-4 w-4" />
            {article.read_time_minutes} 分钟阅读
          </span>
        </div>

        <h1 className="text-2xl font-bold sm:text-3xl">{article.title}</h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {article.summary}
        </p>

        <hr className="my-8 border-gray-100 dark:border-gray-800" />

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-li:my-1 prose-blockquote:border-primary-300 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400 prose-strong:text-gray-900 dark:prose-strong:text-gray-100">
          {article.content.split("\n").map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return <br key={i} />;
            if (trimmed.startsWith("## "))
              return (
                <h2 key={i} className="text-xl font-bold mt-8 mb-4">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            if (trimmed.startsWith("### "))
              return (
                <h3 key={i} className="text-lg font-semibold mt-6 mb-3">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            if (trimmed.startsWith("> "))
              return (
                <blockquote
                  key={i}
                  className="my-4 border-l-4 border-primary-300 pl-4 italic text-gray-600 dark:text-gray-400"
                >
                  {trimmed.replace("> ", "")}
                </blockquote>
              );
            if (trimmed.startsWith("- **"))
              return (
                <li key={i} className="ml-4 my-1">
                  <strong>
                    {trimmed.match(/\*\*(.*?)\*\*/)?.[1]}
                  </strong>
                  {trimmed.replace(/- \*\*.*?\*\*/, "")}
                </li>
              );
            if (trimmed.startsWith("- "))
              return (
                <li key={i} className="ml-4 my-1">
                  {trimmed.replace("- ", "")}
                </li>
              );
            if (/^\d+\.\s/.test(trimmed))
              return (
                <li key={i} className="ml-4 my-1 list-decimal">
                  {trimmed.replace(/^\d+\.\s/, "")}
                </li>
              );
            return (
              <p key={i} className="my-2 leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>
      </article>

      <div className="mt-8 text-center">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 rounded-xl bg-primary-50 px-6 py-3 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-100 dark:bg-primary-900/20 dark:text-primary-400 dark:hover:bg-primary-900/30"
        >
          <BookOpen className="h-4 w-4" />
          阅读更多文章
        </Link>
      </div>
    </div>
  );
}
