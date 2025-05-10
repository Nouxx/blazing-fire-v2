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

### Counpound components

Counpound components are not writable with one single imported object

```tsx
import { MyComp } from "./MyComp";

<MyComp>
  <MyComp.SubComponent />
</MyComp>;
```

https://github.com/vercel/next.js/issues/44030
