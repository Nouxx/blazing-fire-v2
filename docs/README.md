# Docs

Documentation is kept simple with pure markdown:

- No website deployments to worry about.
- No `MDX` complexity - just clean, easy-to-preview files.

## Asset generation

Diagrams are crafted using [`d2`](https://d2lang.com).

Since markdown doesn't natively support it, everything is rendered to `.svg` files that get embedded in the pages.

All diagrams live in `./assets/diagrams`.

```bash
./render-d2 # run this to refresh all diagrams
```
