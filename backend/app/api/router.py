from fastapi import APIRouter

from app.api.v1.endpoints import activities, articles, health

api_router = APIRouter()

api_router.include_router(health.router, prefix="/v1")
api_router.include_router(activities.router, prefix="/v1")
api_router.include_router(articles.router, prefix="/v1")
