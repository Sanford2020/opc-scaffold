"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  BarChart3,
  Package,
  ListOrdered,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import { apiClient } from "@/lib/api";
import type { Activity } from "@/types/kidsbond";

export default function ActivityDetailPage() {
  const params = useParams();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.id) return;
    apiClient
      .get<{ success: boolean; data: Activity }>(
        `/api/v1/activities/${params.id}`,
      )
      .then((res) => setActivity(res.data))
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

  if (!activity) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-lg text-gray-500">活动未找到</p>
        <Link
          href="/activities"
          className="mt-4 inline-flex items-center gap-1 text-primary-600"
        >
          <ArrowLeft className="h-4 w-4" />
          返回活动库
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back Link */}
      <Link
        href="/activities"
        className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        返回活动库
      </Link>

      {/* Header */}
      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm dark:bg-gray-900">
        <div className="flex h-52 items-center justify-center bg-gradient-to-br from-primary-50 via-warm-50 to-mint-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
          <span className="text-8xl">{activity.image_emoji}</span>
        </div>

        <div className="p-6 sm:p-8">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {activity.category && (
              <span
                className="rounded-full px-3 py-1 text-sm font-medium text-white"
                style={{ backgroundColor: activity.category.color }}
              >
                {activity.category.name}
              </span>
            )}
            {activity.age_group && (
              <span className="rounded-full bg-mint-50 px-3 py-1 text-sm font-medium text-mint-700 dark:bg-mint-900/30 dark:text-mint-400">
                适合 {activity.age_group.name}
              </span>
            )}
          </div>

          <h1 className="text-2xl font-bold sm:text-3xl">{activity.title}</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            {activity.description}
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-xl bg-warm-50 px-4 py-2 text-sm dark:bg-gray-800">
              <Clock className="h-4 w-4 text-warm-600" />
              <span className="font-medium">{activity.duration_minutes} 分钟</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-2 text-sm dark:bg-gray-800">
              <BarChart3 className="h-4 w-4 text-sky-600" />
              <span className="font-medium">难度：{activity.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Steps */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-gray-900">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <ListOrdered className="h-5 w-5 text-primary-500" />
              活动步骤
            </h2>
            <ol className="space-y-3">
              {activity.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-gray-700 dark:text-gray-300">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* Tips */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-gray-900">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="h-5 w-5 text-warm-500" />
              小贴士
            </h2>
            <ul className="space-y-2">
              {activity.tips.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Materials */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-gray-900">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <Package className="h-5 w-5 text-mint-500" />
              所需材料
            </h2>
            <ul className="space-y-2">
              {activity.materials.map((material, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
                  {material}
                </li>
              ))}
            </ul>
          </section>

          {/* Education Value */}
          <section className="rounded-2xl border bg-gradient-to-br from-primary-50 to-warm-50 p-6 dark:from-gray-900 dark:to-gray-900 dark:border-gray-800">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <GraduationCap className="h-5 w-5 text-primary-500" />
              教育价值
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {activity.education_value}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
