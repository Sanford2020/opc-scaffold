"""
Base model module.

Import all models here so Alembic can detect them.
Example:
    from app.models.user import User  # noqa: F401
"""

from app.db.base import Base

__all__ = ["Base"]
