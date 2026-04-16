# ============================================
# Savazar GVSS Summit — Dockerfile
# Base: node:20-alpine | Port: 3040
# ============================================

FROM node:20-alpine AS base

# Install dependencies for better-sqlite3 native bindings
RUN apk add --no-cache libc6-compat python3 make g++

WORKDIR /app

# ─── DEPS STAGE ───
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# ─── BUILDER STAGE ───
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ─── RUNNER STAGE ───
#FROM base AS runner
#WORKDIR /app

#ENV NODE_ENV=production
#ENV NEXT_TELEMETRY_DISABLED=1
#ENV PORT=3040

# Create non-root user
#RUN addgroup --system --gid 1001 nodejs
#RUN adduser --system --uid 1001 nextjs

# Create data directory for SQLite persistence
#RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

# Copy built app from builder
#COPY --from=builder /app/public ./public
#COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
#COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy the custom server (needed for port binding)
#COPY --from=builder --chown=nextjs:nodejs /app/server.js ./server.js

# Copy better-sqlite3 binary
#COPY --from=builder /app/node_modules/better-sqlite3 ./node_modules/better-sqlite3

#USER nextjs

#EXPOSE 3040

# Health check
#HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
#  CMD wget -qO- http://localhost:3040/api/register || exit 1

#CMD ["node", "server.js"]

# ─── RUNNER STAGE ───
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3040

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Create data directory for SQLite persistence
RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

# 1. Copy standalone build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# 2. Copy static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# 3. Copy public folder
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# 4. Copy custom server.js
COPY --from=builder --chown=nextjs:nodejs /app/server.js ./server.js

USER nextjs
EXPOSE 3040

CMD ["node", "server.js"]
