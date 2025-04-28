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
- UI Tests: Visual tests of components of the app
    - functional components (no full page, no core UI design system)

```bash
```
