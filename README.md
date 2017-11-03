# vue-webpack-multiple-page-template

> fork官方单页面模板，结合公司、团队、个性化适配、为一个规范、快捷、流畅、舒心的开发环境而生。<br/>
> vue/vuex(可选)/vue-router(可选) - 自动化工程模板 <br/>
> 支持多页/单页、路由异步加载模块、多页公共资源共享、开发热加载、xhr、svg2icon<br/>
> 你、我觉得开发环境不爽的地方，提出来，一起想法子解决，一起推广分享<br/>

## Documentation

- [For this template](http://vuejs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init ~/fs/path/to-custom-template my-project 本地
$ vue init '<template-name>#<branch-name>' <project-name> 特定分支
$ vue init webpack my-project 官方仓库
$ vue init mejustme/vue-webpack-multiple-page-template my-project  特定人github仓库
$ cd my-project
$ npm install
$ npm run dev
```

If port 8080 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run daily`: 发布非线上环境.
- `npm run online`: 发布线上环境.

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015+ in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
