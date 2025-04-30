FROM mcr.microsoft.com/playwright:v1.52.0-noble AS base
# must match with version in package.json

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# log playwright web server status during startup
ENV DEBUG=pw:webserver

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
# todo: leverage cache for pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

CMD [ "sleep", "infinity" ]