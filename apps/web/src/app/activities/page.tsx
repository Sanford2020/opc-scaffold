"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  Star,
  Palette,
  TreePine,
  BookOpen,
  Music,
  FlaskConical,
  ChefHat,
  Filter,
} from "lucide-react";
import { apiClient } from "@/lib/api";
import type { Activity, Category, AgeGroup } from "@/types/kidsbond";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="h-5 w-5" />,
  TreePine: <TreePine className="h-5 w-5" />,
  BookOpen: <BookOpen className="h-5 w-5" />,
  Music: <Music className="h-5 w-5" />,
  FlaskConical: <FlaskConical className="h-5 w-5" />,
  ChefHat: <ChefHat className="h-5 w-5" />,
};

export default function ActivitiesPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [categories, setCategories] = useState<Category[]>([]);
  const [ageGroups, setAgeGroups] = useState<AgeGroup[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    initialCategory ? Number(initialCategory) : null,
  );
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get<{ success: boolean; data: Category[] }>("/api/v1/categories")
      .then((res) => setCategories(res.data))
      .catch(() => {});
    apiClient
      .get<{ success: boolean; data: AgeGroup[] }>("/api/v1/age-groups")
      .then((res) => setAgeGroups(res.data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    const params: Record<string, string> = {};
    if (selectedCategory) params.category_id = String(selectedCategory);
    if (selectedAgeGroup) params.age_group_id = String(selectedAgeGroup);

    apiClient
      .get<{ success: boolean; data: Activity[]; total: number }>(
        "/api/v1/activities",
        { params },
      )
      .then((res) => setActivities(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [selectedCategory, selectedAgeGroup]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">活动库</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          精选亲子活动，找到最适合你和孩子的陪伴方式
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <Filter className="h-4 w-4" />
          筛选
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-primary-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            全部分类
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === cat.id ? null : cat.id,
                )
              }
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedCategory === cat.id
                  ? "text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
              style={
                selectedCategory === cat.id
                  ? { backgroundColor: cat.color }
                  : undefined
              }
            >
              {iconMap[cat.icon] || <Star className="h-4 w-4" />}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Age Group Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedAgeGroup(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedAgeGroup === null
                ? "bg-mint-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            全部年龄
          </button>
          {ageGroups.map((ag) => (
            <button
              key={ag.id}
              onClick={() =>
                setSelectedAgeGroup(
                  selectedAgeGroup === ag.id ? null : ag.id,
                )
              }
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedAgeGroup === ag.id
                  ? "bg-mint-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              {ag.name}
            </button>
          ))}
        </div>
      </div>

      {/* Activity Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-200 border-t-primary-500" />
        </div>
      ) : activities.length === 0 ? (
        <div className="py-20 text-center text-gray-400">
          <p className="text-lg">暂无符合条件的活动</p>
          <p className="mt-2 text-sm">试试调整筛选条件</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/activities/${activity.id}`}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:bg-gray-900"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-primary-50 to-warm-50 dark:from-gray-800 dark:to-gray-800">
                <span className="text-5xl">{activity.image_emoji}</span>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  {activity.category && (
                    <span
                      className="rounded-full px-2 py-0.5 text-xs font-medium text-white"
                      style={{ backgroundColor: activity.category.color }}
                    >
                      {activity.category.name}
                    </span>
                  )}
                  {activity.age_group && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.age_group.name}
                    </span>
                  )}
                  {activity.is_featured && (
                    <Star className="h-3.5 w-3.5 fill-warm-400 text-warm-400" />
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
      )}

      {/* Results count */}
      {!loading && activities.length > 0 && (
        <p className="mt-8 text-center text-sm text-gray-400">
          共 {activities.length} 个活动
        </p>
      )}
    </div>
  );
}
