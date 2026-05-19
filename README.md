# OPC Scaffold

**Universal AI Software Company** — 生产级 monorepo 通用脚手架，整合远程 Devin 工程化 + 本地 Multi-Agent / 结构化 Prompt 优势。

## 特性一览

| 模块 | 能力 |
|------|------|
| **Backend** | FastAPI · Poetry · SQLAlchemy 2 · Alembic · 统一错误处理 · structlog |
| **Frontend** | Next.js 14 · Tailwind · 深色模式 · Zustand · Vitest |
| **Workers** | Celery + Redis · 优先级队列 · Beat 调度 |
| **AI** | OpenAI-compatible · YAML Prompt · JSON 结构化输出 · `/api/v1/ai/chat` |
| **Agents** | 8 角色 + Orchestrator（`/agents/`） |
| **Shared** | `@opc/shared-types` 前后端类型共享 |
| **Infra** | Docker Compose · GitHub Actions CI · Makefile |

## 快速开始

```bash
git clone https://github.com/Sanford2020/opc-scaffold.git
cd opc-scaffold
git checkout devin/1779111789-scaffold-init   # 或合并后的 main

make setup
docker compose up -d db redis
make dev-backend    # Terminal 1 → http://localhost:8000/docs
make dev-frontend   # Terminal 2 → http://localhost:3000
```

或一键 Docker：

```bash
cp backend/.env.example backend/.env
docker compose up
```

## 项目结构

```
opc-scaffold/
├── apps/web/                 # Next.js 前端
├── backend/                  # FastAPI (Poetry)
├── services/ai/              # AI 客户端 + PromptManager
├── workers/                  # Celery tasks
├── packages/
│   ├── shared-types/         # TypeScript 共享类型
│   └── shared/               # Python 共享工具
├── agents/                   # Multi-Agent 角色 + 编排器
├── prompts/                  # YAML Prompt（default, code_review…）
├── config/                   # 集中配置
├── scripts/                  # setup / test / lint / migrate
├── docker/                   # 各服务 Dockerfile
├── docs/                     # 架构 / API / 部署文档
└── AGENTS.md                 # AI 开发规范（必读）
```

## API 示例

```bash
# 健康检查
curl http://localhost:8000/api/v1/health

# AI 对话（无 API Key 时返回 Mock）
curl -X POST http://localhost:8000/api/v1/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"prompt":"分析这个项目","prompt_template":"default"}'

# 列出 Prompt 模板
curl http://localhost:8000/api/v1/ai/prompts
```

## 开发规范

所有开发遵循 [AGENTS.md](./AGENTS.md)：

1. 先分析 → 再设计 → Sprint 迭代 → 测试验证
2. Prompt 放 `/prompts/*.yaml`，Agent 角色放 `/agents/roles/`
3. 新 API 走 `/api/v1/`，响应用统一 envelope
4. 完成前运行 `make test`

## 文档

- [架构说明](./docs/architecture.md)
- [API 文档](./docs/api.md)
- [部署指南](./docs/deployment.md)
- [Agent 编排](./agents/orchestrator.md)

## 基于本脚手架创建产品

```bash
# Sprint 1: 数据模型 + 迁移
# Sprint 2: Backend API
# Sprint 3: Frontend 页面
# Sprint 4: Celery 异步任务
# Sprint 5: CI/CD + E2E
```

每个 Sprint 保持系统可运行 — 这是 OPC 方法论的核心。

## License

MIT
