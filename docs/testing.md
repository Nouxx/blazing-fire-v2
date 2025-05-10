# Testing

## UI tests

Visual tests of some app components.

- functional components (no full page, no core UI design system)
- tested components must follow the [presentational pattern](https://www.patterns.dev/react/presentational-container-pattern): tested components are the presentation layer thats only gets plain javascript objects so it's easy to mock and does not screw up playwright experimental components testing features.

## E2E tests

E2E Tests: End to end tests of the running app with all its dependencies

- build artifact (no dev server)
- no visual testing (only DOM assertions)
- mock as little as possible

## Docker

All playwright tests run in Docker (`compose.yaml`)

Visual tests (aka UI) must be in Docker to avoid screenshot comparison flakiness: runs always on the same OS

Since it's in Docker, the test service must be rebuilt once there's a change in the app dependencies

No need to rebuild it when the app code changes, as it its shared with a volume.

```bash
docker compose build test
# or "dcb test" with oh-my-zsh plugin
```

Don't run the UI tests on the host, as snapshots might be different.

Reports from UI will override the one from E2E and vice versa

There is a problem with font rendering on linux atm:

- [issue](https://github.com/microsoft/playwright/issues/22429)
- [issue](https://github.com/microsoft/playwright/issues/30785)
- [issue](https://stackoverflow.com/questions/75374652/playwright-tests-inside-docker-fails-to-load-fonts)

todo: fix this when setting up font across the project
