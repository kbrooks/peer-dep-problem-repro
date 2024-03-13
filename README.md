## Peer Dependency Resolution Issue (webpack/jest/pnpm)

This repo demonstrates an issue with jest and webpack where module resolution does not respect the peerDependencies
property. The test-package repo has a devDependency and peerDependency on jotai, but webpack and jest do not respect
this and use the version of jotai installed under ./packages/test-package/node_modules/jotai. 

### Steps to reproduce (jest)
Run the test in `test-app`
```sh
cd packages/test-app
pnpm test
```

### Steps to reproduce (webpack)
Run the local app in `test-app`
```sh
cd packages/test-app
pnpm start
```

### What's wrong?

Expected: All Counter components have independent state

Actual: Two of the counters have shared state because there are two versions of jotai being loaded.
