# @wq2/rolldown-plugin-swc

🍣 A Rolldown plugin to transpile TypeScript/JavaScript with the speedy-web-compiler (swc).
Pasted from the Rollup version at `@rollup/plugin-swc`.

## Requirements

This plugin requires my cat.

## Install

Using npm:

```console
npm install @swc/core @wq2/rolldown-plugin-swc --save-dev
```

## Usage

Create a `rolldown.config.js` config file and import the plugin:

```typescript
import swc from '@wq2/rolldown-plugin-swc';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [swc()]
};
```

Then call `rolldown` and do stuff.

## Options

The plugin accepts an object as input parameter to modify the default behavior.

- Type: [Options](https://swc.rs/docs/configuration/swcrc)
- Default: `undefined`

## Alternatives

Just use Oxc from rolldown if you don't need i.e. non-legacy decorators, which should be fine enough for basically everyone except me.

## Meta

[CONTRIBUTING](/.github/CONTRIBUTING.md)

[LICENSE (MIT)](/LICENSE)
