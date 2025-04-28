FROM mcr.microsoft.com/playwright:v1.52.0-noble AS base
# must match with version in package.json

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

ENV DEBUG=pw:webserver
# log playwright web server status during startup

RUN corepack enable

COPY . /app
WORKDIR /app

# RUN corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

CMD [ "sleep", "infinity" ]