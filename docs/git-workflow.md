# Git workflow

Following the principles of _"trunk-based development"_, all codebase modifications are merged incrementally into the `main` branch (the trunk).

To ensure it remains production-ready, every change is integrated through pull requests and CI is making sure the change can be safely deployed.

## Squash over Rebase

All PR commits are squashed before being merged.

**Benefits**

- maintain linear git history making it easy to read every incremental changes.
- Prevents "points in time in your main branch where tests did not pass" _(wisdom from [release-please](https://github.com/googleapis/release-please))_ — every commit in `main` is safe to roll back to.

**Limitations**

- It's not possible to separate multiples topics (e.g., feature, refactor) in the same PR. The solution is to open a dedicated PR for each change.

Overall, this workflow works well for small teams but may not scale efficiently in larger projects with many contributors.

## Semantics

Follow the [conventional commit convention](https://www.conventionalcommits.org/en/v1.0.0).

Allowed types:

- `build`
- `chore`
- `ci`
- `docs`
- `feat`
- `fix`
- `perf`
- `refactor`
- `revert`
- `style`
- `test`

`ci`, `docs` and `test` does not trigger a new version/release.
