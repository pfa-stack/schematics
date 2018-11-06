# PFA Schematics

Schematic to create a new Angular builder.

[![latest](https://img.shields.io/npm/v/%40pfa%2Fschematics/latest.svg)](https://npmjs.com/package/@pfa/schematics)
[![Build Status](https://travis-ci.org/pfa-stack/schematics.svg?branch=master)](https://travis-ci.org/pfa-stack/schematics)
[![Dependency Status](https://david-dm.org/pfa-stack/schematics.svg)](https://david-dm.org/pfa-stack/schematics)
[![devDependency Status](https://david-dm.org/pfa-stack/schematics/dev-status.svg)](https://david-dm.org/pfa-stack/schematics?type=dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![License](https://img.shields.io/npm/l/@pfa/schematics.svg)](https://github.com/pfa-stack/schematics/blob/master/LICENSE)

| [Contributing](https://github.com/pfa-stack/schematics/blob/master/CONTRIBUTING.md) |
| ----------------------------------------------------------------------------------- |


### Goal

Make it easier for starters to develop their own builders.

### Usage

In order to use the schematics to generate the builder, you can use [npx](https://www.npmjs.com/package/npx) or [pnpx](https://pnpm.js.org/docs/en/pnpx-cli.html):

```sh
npx \ # pnpx
  -p @angular-devkit/schematics-cli \
  -p @pfa/schematics \
  schematics @pfa/schematics:builder --name="my-builder" --path="my-builder-path"
```

Or you can install both packages globally and run the schematics cli:

```sh
npm i -g @angular-devkit/schematics-cli @pfa/schematics

schematics @pfa/schematics:builder --name="my-builder" --path="my-builder-path"
```

Or if you are using `yarn`:

```sh
yarn global add @angular-devkit/schematics-cli @pfa/schematics

schematics @pfa/schematics:builder --name="my-builder" --path="my-builder-path"
```

Or even if you are using `pnpm`:

```sh
pnpm install --global @angular-devkit/schematics-cli @pfa/schematics

schematics @pfa/schematics:builder --name="my-builder" --path="my-builder-path"
```

Running those commands will create a directory with the name you provided with the `path` option, if you didn't, it will use the `name` option as the directory name.
