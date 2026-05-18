import { Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-warm-50/50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Heart className="h-4 w-4 text-primary-400" />
            <span>KidsBond &mdash; 让每一刻陪伴都充满意义</span>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            用心陪伴，快乐成长
          </p>
        </div>
      </div>
    </footer>
  );
}
