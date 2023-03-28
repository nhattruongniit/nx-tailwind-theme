# NxAntTheme

## Scripts

```bash
# run app localhost
$ npx nx run pancake:serve
```

## Step to step to publish libs via npm package

```bash
# Create an library react
$ npx nx generate @nrwl/react:library piano --unitTestRunner=none --directory=themes --appProject=pancake --importPath=@tailwind-theme/piano --publishable

# Go to libs/themes/piano/package.json
{
  ...
  "private": false,
  "publishConfig": {
    "access": "public"
  }
}

# Build library piano
$ npx nx run themes-piano:build

# Registry npm package
$ npm login (create Organizations tailwind-theme)

# publish npm package
$ cd dist/libs/themes/piano
$ npm publish
```
