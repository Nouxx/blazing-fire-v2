# Testing

## Philosophy

- Test wisely: don't over test (avoid striving for 100% coverage if it leads to redundant tests), but ensure critical paths are well-tested.

- Focus on behavior: Test the behavior, not the implementation details.

- Avoid flaky tests: Tests that often fails for the wrong reasons (i.e. not a bug) can be costly to maintain; prioritize tests that provide real value.

## Unit tests

Often referred to as "unit tests," these can also be integration tests, as long as they operate in a static context (i.e., without building the full application).

## UI tests

[Visual regression tests](https://playwright.dev/docs/test-snapshots) for "functional" application components (see [architecture](architecture.md)):

- Target functional components rather than full pages or core UI elements from the design system. This minimizes the need to update many snapshots when core design components (ex: button) changes.

- Cover all possible states: happy paths, error scenarios, empty states, etc.

- Test with light and dark themes.

## E2E tests

Comprehensive tests of the running application, including all dependencies:

- Run against the built application (not the development server).

- Focus on DOM assertions rather than visual comparisons to avoid too many snapshots updates for every slight changes.

- Minimize mocking: test with real dependencies like databases and authentication services to closely mimic production environments.

## Docker

All Playwright tests are executed within Docker (`compose.yaml`):

- Running visual tests (UI tests) inside Docker ensures consistency in screenshot comparisons as they always run on the same OS. **Avoid running UI tests on the host machine, this will results in inconsistent snapshots.**

- When application dependencies change, rebuild the test service:

```bash
docker compose build test
# or "dcb test" with oh-my-zsh plugin
```

No need to rebuild the Docker image when only the application code changes.

### Font Rendering Issue on Linux

There are known issues with font rendering in Linux environments, which can affect visual tests:

- [playwright/issues/22429](https://github.com/microsoft/playwright/issues/22429)
- [playwright/issues/30785](https://github.com/microsoft/playwright/issues/30785)
- [Stack Overflow Discussion](https://stackoverflow.com/questions/75374652/playwright-tests-inside-docker-fails-to-load-fonts)
