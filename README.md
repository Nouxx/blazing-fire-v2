# Blazing fire

An all-in-one application to manage your diet, reducing friction when finding appropriate daily meals, so you can focus on your life while keeping your inner fire blazing!

## Quick start

### Pre-requisite

- `Node` (v22) and `pnpm` (v10)
- `supabase` CLI (as the npm package `supabase` installation does not provide any bin, [source](https://github.com/supabase/supabase/issues/11851))

### Setup env

An `.env.local` file is needed by Next.js.

Required values are mentioned in `.env.example`.

### Dev

Launch the dev environment in `localhost:3000`

```bash
pnpm dev
```

Start the supabase local instance

```bash
supabase start # or stop
```

### Test

```bash
pnpm test:ui     # runs UI tests
pnpm test:e2e    # runs E2E tests
pnpm test:report # show report
```

Details in the [testing documentation](docs/testing.md).

## Go further

Check the [docs](docs) folder.
