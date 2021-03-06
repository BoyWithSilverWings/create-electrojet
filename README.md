<div align="center">
  <img src="logo.svg" alt="logo rocket" height="150">
  <h1>ELECTROJET CLI</h1>
  <a href="https://badge.fury.io/js/create-electrojet"><img src="https://badge.fury.io/js/create-electrojet.svg" alt="npm version" height="18"></a>
  <a href="https://circleci.com/gh/agneym/create-electrojet">
    <img src="https://circleci.com/gh/agneym/create-electrojet/tree/master.svg?style=svg" />
  </a>
  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
  <a href="https://standardjs.com">
    <img alt="coding style: standard" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
  </a>
</div>


## Usage

```
npm init electrojet <project-name>
```

The CLI will walk you through a set of options for you to select the template/starter. 

### Options

#### 1. Template

This option allows you to select the template beforehand.

```
npm init electrojet <project-name> --template=electron
```

[See list of currently available templates](https://github.com/agneym/create-electrojet#list-of-available-templates)

#### 2. Starter

This option allows you to select a starter beforehand.

```
npm init electrojet <project-name> --starter=<User>/<RepoName>
```

This format works for repositories hosted on github. 

[How do I customise it to work with Gitlab /  Bitbucket?](https://github.com/agneym/create-electrojet#)

#### How are they different?

A template offers a default configuration for a given technology. For eg. selecting electron as a template, gives you a package with Electron, Javascript, CSS and HTML.

A starter is much more customised and opiniated in it's design. For example, a starter may have Electron with React and Redux installed and setup for you to start working.

## Why?

See [announcement blog](https://blog.agney.in/electrojet-cli-as-a-service/). 

As a User:

:smiley: Get started without worrying about configuration

:yum: Learn configuration for one CLI instead of a million ones

As a package owner:

:wrench: You only have to manage the package extension, we will take care of the CLI and core.

:rocket: The user might have Electrojet CLI installed globally/cached. Also, they might know their way around, so it's lesser docs.

:point_up: Easier updates when extending the core package

## How do I add _______ to the configuration?

1. Add a plugin

    There are plugins available for Electrojet that can add functionality to existing configurations. 
    You can add them to `electrojet.config.js` plugins array.

    [List of Plugins](https://github.com/agneym/create-electrojet#list-of-plugins)

2. Roll your own

    If you can't find a plugin, you can always write one. 

    In your plugins directory, add a function that takes the format:

  ```js
  module.exports = {
    plugins: [
      {
        resolve: function (
          env,  // Current running env, either "dev" or "prod". Allows you to create multiple configs for development and production
          context,  // The current configuration, mutating this won't help
          options,  // options from the user, you don't need this for writing custom config
        ) {
          return customConfig; // Return custom configuration
        }
      }
    ]
  }
  ```

  The webpack configuration object that you return from the resolve functions gets [shallow merged](https://github.com/survivejs/webpack-merge#mergesmartconfiguration-configuration) into running configuration. 

## List of available templates

1. [Electron](https://github.com/agneym/create-electrojet/tree/master/packages/electron)
2. [Carlo](https://github.com/agneym/create-electrojet/tree/master/packages/carlo)
3. [Phaser CE](https://github.com/agneym/create-electrojet/tree/master/packages/phaser-ce)
3. [Svelte](https://github.com/agneym/create-electrojet/tree/master/packages/svelte)


## List of plugins

1. [SASS](https://github.com/agneym/create-electrojet/tree/master/plugins/sass)
2. [LESS](https://github.com/agneym/create-electrojet/tree/master/plugins/less)

## How do I build a CLI for my favorite technology?

1. Install `@electrojet/core` for defaults in building Webpages. 
2. Use [Node APIs](https://github.com/agneym/create-electrojet/tree/master/packages/core#node-api) for `@electrojet/core` to extend the start and build scripts.
3. If you are building a Template (and not a starter, [see difference](https://github.com/agneym/create-electrojet#how-are-they-different)), give us a PR to include in electrojet templates.

See any of the [packages](https://github.com/agneym/create-electrojet/tree/master/packages) for an example.

## Developing

1. Clone the repository
2. Run following command to install all dependencies

```bash
lerna bootstrap
```
3. Make changes in your branch
4. Run tests with:
```
lerna run test 
```
5. Give us a PR

## How do I customise it to with Bitbucket / Gitlab Templates

> Docs in progress
