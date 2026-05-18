from pathlib import Path
from typing import Any


class PromptTemplate:
    def __init__(self, template: str, variables: list[str] | None = None) -> None:
        self.template = template
        self.variables = variables or []

    def render(self, **kwargs: Any) -> str:
        rendered = self.template
        for key, value in kwargs.items():
            rendered = rendered.replace(f"{{{{{key}}}}}", str(value))
        return rendered

    def to_message(self, role: str = "system", **kwargs: Any) -> dict[str, str]:
        return {
            "role": role,
            "content": self.render(**kwargs),
        }


class PromptManager:
    def __init__(self, prompts_dir: str | None = None) -> None:
        self.prompts_dir = Path(prompts_dir) if prompts_dir else Path("prompts")
        self._cache: dict[str, PromptTemplate] = {}

    def load(self, name: str) -> PromptTemplate:
        if name in self._cache:
            return self._cache[name]

        prompt_path = self.prompts_dir / f"{name}.txt"
        if not prompt_path.exists():
            raise FileNotFoundError(f"Prompt template not found: {name}")

        template = prompt_path.read_text(encoding="utf-8")
        prompt = PromptTemplate(template=template)
        self._cache[name] = prompt
        return prompt

    def register(self, name: str, template: str) -> PromptTemplate:
        prompt = PromptTemplate(template=template)
        self._cache[name] = prompt
        return prompt

    def get(self, name: str) -> PromptTemplate | None:
        return self._cache.get(name)

    def list_prompts(self) -> list[str]:
        return list(self._cache.keys())


prompt_manager = PromptManager()
