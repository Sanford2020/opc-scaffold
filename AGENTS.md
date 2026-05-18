# AGENTS.md - OPC Scaffold Development Standards

## Core Principles

- **Production-grade code only** - No demos, no pseudo-code, no half-finished implementations
- **Modular architecture** - High cohesion, low coupling, replaceable components
- **Environment-driven config** - All configuration via environment variables, zero hardcoding
- **Async-first** - Background tasks via Celery, async DB sessions, queue-based processing
- **Structured AI output** - All AI responses as JSON, prompts centrally managed
- **Docker-ready** - Every service containerized and orchestrated

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3.11+ / FastAPI / Pydantic v2 |
| Frontend | Next.js 14 / React 18 / TypeScript / Tailwind CSS |
| Database | PostgreSQL / SQLAlchemy 2.0 / Alembic |
| Cache/Queue | Redis |
| Workers | Celery |
| AI | OpenAI-compatible API / Prompt Manager |
| Containers | Docker / docker-compose |
| CI/CD | GitHub Actions |
| Testing | pytest / Vitest |

## Directory Structure

```
├── apps/web/          # Next.js frontend
├── backend/           # FastAPI backend
├── services/ai/       # AI/prompt management
├── workers/           # Celery async workers
├── packages/shared/   # Shared utilities
├── config/            # Centralized config & constants
├── scripts/           # Automation scripts
├── docker/            # Dockerfiles per service
├── docs/              # Documentation
├── tests/e2e/         # End-to-end tests
├── prompts/           # AI prompt templates
└── .github/workflows/ # CI/CD pipelines
```

## Development Rules

1. All modules must be runnable and testable
2. All services must be Docker-ready
3. All config must use environment variables
4. All AI output must be structured (JSON)
5. All databases must support migrations
6. All tasks must support async processing
7. All logs must be structured and traceable
8. All errors must use unified error handling
9. All APIs must be versioned (`/api/v1/`)
10. No hardcoded values anywhere

## Commands

```bash
make setup          # Install all dependencies
make lint           # Run all linters
make test           # Run all tests
make dev-backend    # Start backend dev server
make dev-frontend   # Start frontend dev server
make docker-up      # Start all services via Docker
make migrate        # Run database migrations
```
