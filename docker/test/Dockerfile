FROM mcr.microsoft.com/playwright:v1.52.0-noble AS base
# must match with version in package.json

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
RUN corepack use pnpm@latest-10

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
# todo: leverage cache for pnpm-lock.yaml

RUN pnpm install --frozen-lockfile
