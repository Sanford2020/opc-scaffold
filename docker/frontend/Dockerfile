FROM node:20-alpine AS base

WORKDIR /app

FROM base AS deps

# Maintain monorepo layout so file: references resolve
WORKDIR /monorepo
COPY packages/shared-types ./packages/shared-types
COPY apps/web/package.json apps/web/package-lock.json* ./apps/web/
WORKDIR /monorepo/apps/web
RUN npm install --ignore-scripts

FROM base AS builder

COPY --from=deps /monorepo/apps/web/node_modules ./node_modules
COPY apps/web .
# Replace symlink with actual package so build can resolve @opc/shared-types
COPY packages/shared-types ./node_modules/@opc/shared-types

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM base AS production

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000 \
    HOSTNAME="0.0.0.0"

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
