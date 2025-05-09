# Blazing fire

An all-in-one application to manage your diet, reducing friction when finding appropriate daily meals, so you can focus on your life while keeping your inner fire blazing!

## Cheatsheet

### Pre-requisite

- `Node` and `pnpm`
- `supabase` CLI (as the npm package `supabase` installation does not provide any bin, [source](https://github.com/supabase/supabase/issues/11851))

### `pnpm` 101

```bash
pnpm add --save-dev --save-exact
pnpm install
pnpm dev # runs the "dev" script in package.json
```

### Dev

Launch the dev environment in `localhost:3000`

```bash
pnpm dev
```

Supabase

```bash
supabase start # or stop
```

### Test

- E2E Tests: End to end tests of the running app with all its dependencies
  - build artifact (no dev server)
  - no visual testing (only DOM assertions)

#### UI Tests

Visual tests of components of the app.

- functional components (no full page, no core UI design system)
- must be in Docker to avoid screenshot comparison flakiness: runs always on the same OS
- tested components must follow the [presentational pattern](https://www.patterns.dev/react/presentational-container-pattern): tested components are the presentation layer thats only gets plain javascript objects so it's easy to mock and does not screw up playwright experimental components testing features.

Since it's in Docker, the test service must be rebuilt once there's a change in the app dependencies

No need to rebuild it when the app code changes, as it its shared with a volume.

Don't run the UI tests on the host, as snapshots might be different.

```bash
docker compose build test
# or "dcb test" with oh-my-zsh plugin
```

Reports from UI will override the one from E2E and vice versa

There is a problem with font rendering on linux atm:

- [issue](https://github.com/microsoft/playwright/issues/22429)
- [issue](https://github.com/microsoft/playwright/issues/30785)
- [issue](https://stackoverflow.com/questions/75374652/playwright-tests-inside-docker-fails-to-load-fonts)

todo: fix this when setting up font across the project

## TO note

Counpound components are not writable with one single imported object

```tsx
import { MyComp } from "./MyComp";

<MyComp>
  <MyComp.SubComponent />
</MyComp>;
```

https://github.com/vercel/next.js/issues/44030
