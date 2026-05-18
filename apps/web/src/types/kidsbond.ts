export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export interface AgeGroup {
  id: number;
  name: string;
  slug: string;
  min_age: number;
  max_age: number;
  description: string;
}

export interface Activity {
  id: number;
  title: string;
  slug: string;
  description: string;
  duration_minutes: number;
  difficulty: string;
  materials: string[];
  steps: string[];
  tips: string[];
  education_value: string;
  image_emoji: string;
  is_featured: boolean;
  category_id: number;
  age_group_id: number;
  category: Category | null;
  age_group: AgeGroup | null;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  cover_emoji: string;
  category: string;
  read_time_minutes: number;
}
