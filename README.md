# OPC Scaffold

Production-grade monorepo scaffold for building AI-driven one-person company software assets.

## Features

- **Modular Monorepo** - Clean separation of backend, frontend, services, workers
- **FastAPI Backend** - Async, typed, with structured error handling and logging
- **Next.js Frontend** - React 18, TypeScript, Tailwind CSS, dark mode support
- **Database Migrations** - SQLAlchemy 2.0 + Alembic with naming conventions
- **AI Integration** - OpenAI-compatible client, prompt management, structured JSON output
- **Async Workers** - Celery + Redis for background task processing
- **Docker Ready** - Full docker-compose with PostgreSQL, Redis, all services
- **CI/CD** - GitHub Actions for lint, test, and Docker build
- **Automation** - Makefile + shell scripts for common operations

## Quick Start

### Prerequisites

- Python 3.11+
- Node.js 20+
- Docker & Docker Compose
- Poetry (Python package manager)

### Setup

```bash
# Clone the repository
git clone https://github.com/Sanford2020/opc-scaffold.git
cd opc-scaffold

# Run setup script (installs all dependencies)
make setup

# Or use Docker for everything
docker compose up
```

### Development

```bash
# Start infrastructure (DB + Redis)
docker compose up -d db redis

# Start backend (http://localhost:8000)
make dev-backend

# Start frontend (http://localhost:3000)
make dev-frontend

# Start worker
make dev-worker
```

### Testing

```bash
make test       # Run all tests
make lint       # Run all linters
```

### Database

```bash
make migrate                                    # Run migrations
make migrate CMD=generate NAME=add_users_table  # Generate new migration
make migrate CMD=history                        # View migration history
```

## Project Structure

```
opc-scaffold/
├── apps/
│   └── web/                    # Next.js 14 frontend
│       ├── src/
│       │   ├── app/            # App router pages
│       │   ├── components/     # UI & layout components
│       │   ├── lib/            # API client, utilities
│       │   ├── hooks/          # Custom React hooks
│       │   ├── stores/         # Zustand state management
│       │   └── types/          # TypeScript types
│       └── __tests__/          # Frontend tests
├── backend/
│   ├── app/
│   │   ├── api/v1/endpoints/   # API endpoints (versioned)
│   │   ├── core/               # Error handling, logging, security
│   │   ├── db/                 # Database, sessions, migrations
│   │   ├── models/             # SQLAlchemy models
│   │   ├── schemas/            # Pydantic schemas
│   │   └── services/           # Business logic
│   └── tests/                  # Backend tests
├── services/
│   └── ai/                     # AI client, prompt management
│       ├── prompts/            # Prompt templates
│       └── schemas/            # AI request/response schemas
├── workers/
│   └── tasks/                  # Celery task definitions
├── packages/
│   └── shared/                 # Shared utilities
├── config/                     # Centralized settings & constants
├── scripts/                    # Automation scripts
├── docker/                     # Dockerfiles per service
├── docs/                       # Documentation
├── tests/e2e/                  # End-to-end tests
├── prompts/                    # AI prompt template files
├── .github/workflows/          # CI/CD pipelines
├── docker-compose.yml          # Service orchestration
├── Makefile                    # Development commands
└── AGENTS.md                   # Development standards
```

## Architecture

### Backend (FastAPI)

- **Config**: Environment-variable driven via `pydantic-settings`
- **API**: Versioned routes (`/api/v1/`), dependency injection
- **Error Handling**: Unified `AppError` hierarchy with structured JSON responses
- **Logging**: Structured logging via `structlog` (JSON in production, console in dev)
- **Database**: Async SQLAlchemy 2.0 sessions with proper lifecycle management
- **Security**: Password hashing, token generation utilities

### Frontend (Next.js)

- **Routing**: Next.js App Router
- **Styling**: Tailwind CSS with dark mode support
- **State**: Zustand with persistence
- **API Client**: Type-safe HTTP client with error handling
- **Components**: Composable UI components (Button, etc.)

### AI Service

- **Client**: OpenAI-compatible async client (works with any OpenAI-compatible API)
- **Prompts**: File-based template system with variable substitution
- **Output**: Structured JSON output mode for reliable parsing

### Workers (Celery)

- **Tasks**: Auto-discovered from `workers/tasks/`
- **Queues**: Configurable priority queues (default, high_priority)
- **Progress**: Task progress tracking via Celery state updates

## Environment Variables

See `.env.example` files in `backend/` and `apps/web/` for all configuration options.

## License

MIT
