"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Heart } from "lucide-react";
import { useThemeStore } from "@/stores/theme";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/activities", label: "活动库" },
  { href: "/articles", label: "育儿文章" },
];

export function SiteHeader() {
  const { isDark, toggle } = useThemeStore();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-sm dark:bg-gray-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-warm-500 text-white">
              <Heart className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary-500 to-warm-600 bg-clip-text text-transparent">
              KidsBond
            </span>
          </Link>

          <nav className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <button
          onClick={toggle}
          className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="切换主题"
        >
          {isDark ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
}
