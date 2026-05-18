"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  TreePine,
  Palette,
  Music,
  FlaskConical,
  ChefHat,
  ArrowRight,
  Clock,
  Star,
} from "lucide-react";
import { apiClient } from "@/lib/api";
import type { Activity, Category, Article } from "@/types/kidsbond";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="h-6 w-6" />,
  TreePine: <TreePine className="h-6 w-6" />,
  BookOpen: <BookOpen className="h-6 w-6" />,
  Music: <Music className="h-6 w-6" />,
  FlaskConical: <FlaskConical className="h-6 w-6" />,
  ChefHat: <ChefHat className="h-6 w-6" />,
};

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [featured, setFeatured] = useState<Activity[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    apiClient
      .get<{ success: boolean; data: Category[] }>("/api/v1/categories")
      .then((res) => setCategories(res.data))
      .catch(() => {});
    apiClient
      .get<{ success: boolean; data: Activity[] }>("/api/v1/activities/featured")
      .then((res) => setFeatured(res.data))
      .catch(() => {});
    apiClient
      .get<{ success: boolean; data: Article[] }>("/api/v1/articles")
      .then((res) => setArticles(res.data.slice(0, 3)))
      .catch(() => {});
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-warm-50 to-mint-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-primary-600 shadow-sm dark:bg-gray-800/80 dark:text-primary-400">
              <Heart className="h-4 w-4" />
              用心陪伴，快乐成长
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              和孩子一起
              <span className="bg-gradient-to-r from-primary-500 via-warm-500 to-mint-500 bg-clip-text text-transparent">
                {" "}探索世界{" "}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              精选亲子活动、育儿知识和成长资源，让每一刻陪伴都充满意义。
              从创意手工到科学启蒙，为0-6岁家庭打造高质量亲子时光。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/activities"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 font-medium text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-600 hover:shadow-xl"
              >
                浏览活动库
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                阅读育儿文章
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">探索活动分类</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            6大分类，覆盖孩子成长的方方面面
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/activities?category=${cat.id}`}
              className="group flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:bg-gray-900"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: cat.color }}
              >
                {iconMap[cat.icon] || <Star className="h-6 w-6" />}
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {cat.name}
                </h3>
                <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Activities */}
      <section className="bg-warm-50/50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">精选活动推荐</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                编辑精选，适合今天就开始的亲子活动
              </p>
            </div>
            <Link
              href="/activities"
              className="hidden items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 sm:flex dark:text-primary-400"
            >
              查看全部
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((activity) => (
              <Link
                key={activity.id}
                href={`/activities/${activity.id}`}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:bg-gray-900"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary-50 to-warm-50 dark:from-gray-800 dark:to-gray-800">
                  <span className="text-6xl">{activity.image_emoji}</span>
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    {activity.category && (
                      <span
                        className="rounded-full px-2 py-0.5 text-xs font-medium text-white"
                        style={{
                          backgroundColor: activity.category.color,
                        }}
                      >
                        {activity.category.name}
                      </span>
                    )}
                    {activity.age_group && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.age_group.name}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {activity.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                    {activity.description}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {activity.duration_minutes}分钟
                    </span>
                    <span>难度：{activity.difficulty}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/activities"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary-600"
            >
              查看全部活动
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">育儿好文</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              科学育儿理念，助你成为更好的父母
            </p>
          </div>
          <Link
            href="/articles"
            className="hidden items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 sm:flex dark:text-primary-400"
          >
            查看全部
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:bg-gray-900"
            >
              <div className="mb-4 text-4xl">{article.cover_emoji}</div>
              <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
                {article.category}
              </span>
              <h3 className="mt-3 font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {article.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                {article.summary}
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                <BookOpen className="h-3.5 w-3.5" />
                {article.read_time_minutes} 分钟阅读
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
