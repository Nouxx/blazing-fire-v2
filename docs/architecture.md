# Architecture

## Frontend

```
.
├── app
│   ├── ... (routing)
├── components
│   ├── MyComponent
│   │   ├── __snapshot__
│   │   │   └── ... (visual regression snapshots)
│   │   ├── MyComponent.test.tsx
│   │   └── MyComponent.tsx
│   └── ui
│       ├── ... (core elements: design system)
├── lib
│   └── ...
├── package.json
├── playwright (playwright component tests directory)
```

**Functional** components are kept in `components/`, while **design system** elements live in `components/ui/`.

### Functional components

Functional components:

- are visually tested (see the [testing page](testing.md))

- follow the [Compound Pattern](https://www.patterns.dev/react/compound-pattern) for better reusability and ensure that, during component testing, they receive only static data. This approach simplifies Playwright component tests by reducing complexity and improving maintainability.

A typical structure looks like this:

```
├── MyComponent
│   ├── __snapshot__
│   │   └── ... (visual regression snapshots)
│   ├── containers
│   │   └── MyAppComponentContainer.tsx
│   ├── views
│   │   └── MyAppComponent.tsx
│   ├── MyComponent.test.tsx
│   └── MyComponent.tsx
```

- `views/` contains various static compositions that are reused in UI tests (e.g., `MyComponent.test.tsx`)

- `containers/` provides interactive wrappers using the Compound Pattern, based on the layouts in `views/`

_Note: in Next.js, it's not possible to export a compound component as a single object ([reference](https://github.com/vercel/next.js/issues/44030))_
