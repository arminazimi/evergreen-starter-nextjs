# evergreen-starter-nextjs

Minimal [Next.js](https://nextjs.org) 16 app that dogfoods the [Evergreen Next.js starter kit](https://github.com/arminazimi/evergreen/blob/main/docs/starters/nextjs.md).

CI runs [`arminazimi/evergreen`](https://github.com/arminazimi/evergreen) with an empty baseline and fails on high or critical lifecycle findings (Node.js runtime, Next.js version, GitHub Actions).

```bash
npx evergreen-deprecation scan . --baseline .evergreen-baseline.json --fail-on high
```

Copy the kit into your own app from [`examples/starters/nextjs/`](https://github.com/arminazimi/evergreen/tree/main/examples/starters/nextjs) in the Evergreen repository.
