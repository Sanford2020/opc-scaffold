# Multi-Agent Orchestrator

## Workflow

```
User Request → Orchestrator → [PM | Architect | Backend | Frontend | AI | DevOps | QA | Security] → Structured JSON → Sprint Tasks
```

## Rules

1. Always analyze project before coding (see AGENTS.md Step 1)
2. Each agent produces parseable JSON output
3. Orchestrator merges outputs into actionable sprint tasks
4. One module per sprint — keep system runnable

## Agent Registry

| Agent | File | Output |
|-------|------|--------|
| Product Manager | roles/product_manager.md | Requirements |
| Architect | roles/architect.md | Architecture proposal |
| Backend Engineer | roles/backend_engineer.md | API implementation plan |
| Frontend Engineer | roles/frontend_engineer.md | UI implementation plan |
| AI Engineer | roles/ai_engineer.md | Prompt + integration |
| DevOps Engineer | roles/devops_engineer.md | Infra + CI/CD |
| QA Engineer | roles/qa_engineer.md | Test plan |
| Security Engineer | roles/security_engineer.md | Security review |
