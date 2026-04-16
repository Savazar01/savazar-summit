# ============================================
# Savazar GVSS Summit — Dockerfile
# Base: node:20-alpine | Port: 3040
# ============================================

FROM node:20-alpine AS base

# Install dependencies for native bindings and su-exec for safe user switching
RUN apk add --no-cache libc6-compat python3 make g++ su-exec

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
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3040 
ENV HOSTNAME="0.0.0.0"

# Set up the production user and data directory
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir -p /app/data

# Copy standalone build assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY entrypoint.sh ./entrypoint.sh

# Ensure the script is executable
RUN chmod +x ./entrypoint.sh

EXPOSE 3040

# We start as root to allow entrypoint.sh to fix volume permissions.
# The script will then switch to the 'nextjs' user automatically.
ENTRYPOINT ["./entrypoint.sh"]