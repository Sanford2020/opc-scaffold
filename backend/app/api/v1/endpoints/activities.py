from fastapi import APIRouter, HTTPException

from app.services.seed_data import (
    get_activities,
    get_activity_by_id,
    get_age_groups,
    get_categories,
)

router = APIRouter(tags=["activities"])


@router.get("/categories")
async def list_categories() -> dict[str, object]:
    return {"success": True, "data": get_categories()}


@router.get("/age-groups")
async def list_age_groups() -> dict[str, object]:
    return {"success": True, "data": get_age_groups()}


@router.get("/activities/featured")
async def list_featured_activities() -> dict[str, object]:
    results = get_activities(featured_only=True)
    return {"success": True, "data": results}


@router.get("/activities/{activity_id}")
async def get_activity(activity_id: int) -> dict[str, object]:
    activity = get_activity_by_id(activity_id)
    if not activity:
        raise HTTPException(status_code=404, detail="Activity not found")
    return {"success": True, "data": activity}


@router.get("/activities")
async def list_activities(
    category_id: int | None = None,
    age_group_id: int | None = None,
    difficulty: str | None = None,
) -> dict[str, object]:
    results = get_activities(
        category_id=category_id,
        age_group_id=age_group_id,
        difficulty=difficulty,
    )
    return {"success": True, "data": results, "total": len(results)}
