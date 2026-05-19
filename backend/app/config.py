from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    app_name: str = "opc-scaffold"
    app_env: str = "development"
    app_debug: bool = False
    app_version: str = "0.1.0"

    host: str = "0.0.0.0"  # noqa: S104
    port: int = 8000

    database_url: str = "postgresql://postgres:postgres@localhost:5432/opc_scaffold"

    redis_url: str = "redis://localhost:6379/0"

    cors_origins: list[str] = ["http://localhost:3000", "http://localhost:5173"]

    openai_api_key: str = ""
    openai_model: str = "gpt-4"
    openai_base_url: str = "https://api.openai.com/v1"

    secret_key: str = "change-this-to-a-random-secret-key"  # noqa: S105
    access_token_expire_minutes: int = 30

    celery_broker_url: str = "redis://localhost:6379/0"
    celery_result_backend: str = "redis://localhost:6379/1"

    log_level: str = "INFO"
    log_format: str = "json"

    prompts_dir: str = "../prompts"

    @property
    def is_development(self) -> bool:
        return self.app_env == "development"

    @property
    def is_production(self) -> bool:
        return self.app_env == "production"


settings = Settings()
