FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends curl && \
    rm -rf /var/lib/apt/lists/*

RUN pip install poetry && \
    poetry config virtualenvs.create false

COPY backend/pyproject.toml backend/poetry.lock* ./
RUN poetry install --no-dev --no-interaction --no-ansi 2>/dev/null || \
    poetry install --without dev --no-interaction --no-ansi

COPY backend/app ./app
COPY workers ./workers
COPY services ./services
COPY packages ./packages
COPY config ./config

CMD ["celery", "-A", "workers.celery_app", "worker", "--loglevel=info", "--concurrency=4"]
