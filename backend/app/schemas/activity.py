from pydantic import BaseModel


class CategorySchema(BaseModel):
    id: int
    name: str
    slug: str
    description: str
    icon: str
    color: str


class AgeGroupSchema(BaseModel):
    id: int
    name: str
    slug: str
    min_age: int
    max_age: int
    description: str


class ActivitySchema(BaseModel):
    id: int
    title: str
    slug: str
    description: str
    duration_minutes: int
    difficulty: str
    materials: list[str]
    steps: list[str]
    tips: list[str]
    education_value: str
    image_emoji: str
    is_featured: bool
    category_id: int
    age_group_id: int
    category: CategorySchema | None = None
    age_group: AgeGroupSchema | None = None


class ArticleSchema(BaseModel):
    id: int
    title: str
    slug: str
    summary: str
    content: str
    cover_emoji: str
    category: str
    read_time_minutes: int
