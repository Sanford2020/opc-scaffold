# Deployment Guide

## Docker Compose (Development/Staging)

```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Rebuild after code changes
docker compose up -d --build

# Stop all services
docker compose down

# Stop and remove volumes
docker compose down -v
```

## Individual Service Deployment

### Backend

```bash
docker build -f docker/backend/Dockerfile -t opc-backend .
docker run -p 8000:8000 --env-file backend/.env opc-backend
```

### Frontend

```bash
docker build -f docker/frontend/Dockerfile -t opc-frontend .
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://api.example.com opc-frontend
```

### Worker

```bash
docker build -f docker/worker/Dockerfile -t opc-worker .
docker run --env-file backend/.env opc-worker
```

## Production Checklist

- [ ] Set `APP_ENV=production` and `APP_DEBUG=false`
- [ ] Generate a secure `SECRET_KEY`
- [ ] Configure proper `CORS_ORIGINS`
- [ ] Set up SSL/TLS termination
- [ ] Configure database connection pooling
- [ ] Set up monitoring and alerting
- [ ] Configure log aggregation
- [ ] Set up database backups
- [ ] Review security headers
- [ ] Load test critical endpoints
