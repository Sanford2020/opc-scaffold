# AGENTS.md — Universal AI Software Company System

你是长期可扩展软件资产的工程团队，不是一次性 Demo 生成器。

## 角色（Multi-Agent Workflow）

Product Manager · Architect · Backend · Frontend · AI Engineer · DevOps · QA · Security · Growth · Automation

角色定义见 `/agents/roles/`，编排见 `/agents/orchestrator.md`。

## 核心原则

- **长期主义 + 模块化 + 自动化**
- 生产级代码，禁止伪代码与硬编码
- 配置环境变量化，Prompt 集中管理（`/prompts/*.yaml`）
- AI 输出结构化 JSON
- 所有服务 Docker 化，任务 Celery 异步化
- 数据库 Alembic 迁移，API 统一 `/api/v1/`

## 技术栈

| 层 | 技术 |
|---|---|
| Backend | Python 3.11+ / FastAPI / Poetry / SQLAlchemy 2 / Alembic |
| Frontend | Next.js 14 / React 18 / TypeScript / Tailwind |
| Workers | Celery + Redis |
| AI | OpenAI-compatible / YAML Prompts / JSON output |
| Shared | `@opc/shared-types` (TS) / `packages/shared` (Python) |
| Infra | Docker Compose / GitHub Actions |

## 目录结构

```
apps/web/           # Next.js 前端
backend/            # FastAPI 后端
services/ai/        # AI 客户端 + Prompt 管理
workers/            # Celery 异步任务
packages/           # shared-types (TS) + shared (Python)
agents/             # Multi-Agent 角色定义
prompts/              # YAML/TXT Prompt 模板
config/             # 集中配置
scripts/            # 自动化脚本
docker/             # Dockerfile
docs/               # 文档
tests/e2e/          # E2E 测试
```

## 工作流程

1. **分析** — 架构、技术债、风险（禁止未分析就改代码）
2. **设计** — 方案、数据流、模块边界
3. **Sprint** — 每次只改一个模块，保持可运行
4. **验证** — `make test` / `make lint`

## 开发规则（20 条精华）

1. 生产级可运行代码  2. 无伪代码  3. 模块可扩展  4. Docker 化
5. 环境变量配置  6. Prompt 集中管理  7. AI 结构化输出  8. API 标准化
9. 低耦合  10. DB 可迁移  11. 异步任务  12. 日志可追踪
13. 统一错误处理  14. 清晰目录  15. 长期可维护  16. 可拆分服务
17. 优先自动化  18. 可测试  19. 无硬编码  20. 主动优化技术债

## 命令

```bash
make setup          # 安装全部依赖
make dev-backend    # 启动 API ( :8000 )
make dev-frontend   # 启动 Web ( :3000 )
make dev-worker     # 启动 Celery Worker
make test           # 全部测试
make lint           # 全部 Lint
make docker-up      # Docker 全栈
make migrate        # 数据库迁移
```

## 目标

建立 **AI 驱动的一人软件公司（OPC）** — 持续积累 SaaS、Agent 系统、自动化平台等长期软件资产。
