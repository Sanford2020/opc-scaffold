from fastapi import APIRouter, HTTPException

from app.services.seed_data import get_article_by_id, get_articles

router = APIRouter(tags=["articles"])


@router.get("/articles")
async def list_articles() -> dict[str, object]:
    return {"success": True, "data": get_articles()}


@router.get("/articles/{article_id}")
async def get_article(article_id: int) -> dict[str, object]:
    article = get_article_by_id(article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"success": True, "data": article}
