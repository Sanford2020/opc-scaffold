"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Activity, Database, Cpu, Layers, Bot } from "lucide-react";
import type { APIResponse, HealthData } from "@opc/shared-types";
import { useThemeStore } from "@/stores/theme";
import { apiClient } from "@/lib/api";

export default function Home() {
  const { isDark, toggle } = useThemeStore();
  const [health, setHealth] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get<APIResponse<HealthData>>("/api/v1/health")
      .then((res) => setHealth(res.data ?? null))
      .catch(() => setHealth(null))
      .finally(() => setLoading(false));
  }, []);

  const features = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Modular Architecture",
      description: "Domain-driven, low-coupling, high-cohesion design",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Migrations",
      description: "SQLAlchemy + Alembic with full migration support",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI Integration",
      description: "OpenAI-compatible, prompt management, structured output",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Multi-Agent Workflow",
      description: "8 specialized agent roles + orchestrator in /agents",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Async Workers",
      description: "Celery + Redis for background task processing",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-sm">
              O
            </div>
            <span className="text-lg font-semibold">OPC Scaffold</span>
          </div>
          <button
            onClick={toggle}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          OPC{" "}
          <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
            Scaffold
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Production-grade monorepo scaffold for building AI-driven one-person
          company software assets. Modular, scalable, maintainable.
        </p>

        <div className="mt-8 flex items-center gap-3">
          {loading ? (
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800">
              <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
              Connecting...
            </div>
          ) : health ? (
            <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Backend: {health.status} · v{health.version}
            </div>
          ) : (
            <div className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-400">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              Backend: offline
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                {feature.icon}
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-auto border-t py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
          OPC Scaffold &mdash; Built for long-term software assets
        </div>
      </footer>
    </main>
  );
}
