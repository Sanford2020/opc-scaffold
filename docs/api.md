# API Documentation

## Base URL

- Development: `http://localhost:8000`
- API Docs (Swagger): `http://localhost:8000/docs`
- API Docs (ReDoc): `http://localhost:8000/redoc`

## Endpoints

### Health Check

```
GET /api/v1/health
```

Response:
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "app_name": "opc-scaffold",
    "version": "0.1.0",
    "environment": "development",
    "timestamp": "2024-01-01T00:00:00+00:00"
  }
}
```

### Ping

```
GET /api/v1/ping
```

Response:
```json
{
  "message": "pong"
}
```

## Error Response Format

All errors follow a unified format:

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource not found",
    "details": {}
  }
}
```

## Adding New Endpoints

1. Create a new file in `backend/app/api/v1/endpoints/`
2. Define a router with appropriate tags
3. Register the router in `backend/app/api/router.py`
4. Add corresponding schemas in `backend/app/schemas/`
5. Add business logic in `backend/app/services/`
