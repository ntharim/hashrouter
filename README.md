
# hashrouter

[![NPM version][npm-image]][npm-url]
[![Github release][github-image]][github-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]

Generic [http-hash](https://github.com/Matt-Esch/http-hash) router

## Installation

```sh
npm install --save hashrouter
```

## Usage

```js
var HashRouter = require('hashrouter');

var router = HashRouter(function notFound() {
  console.log('NOT FOUND 404');
});
router.set('/foo', function foo(req, res, opts) {
  // do stuff
});

router('/foo', req, res); // can pass in any number of arguments
```

`opts` is of form `{ params: , splat: }`

See [http-hash](https://github.com/Matt-Esch/http-hash) for more information.

[npm-image]: https://img.shields.io/npm/v/hashrouter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/hashrouter
[github-image]: http://img.shields.io/github/release/nthtran/hashrouter.svg?style=flat-square
[github-url]: https://github.com/nthtran/hashrouter/releases
[travis-image]: https://img.shields.io/travis/nthtran/hashrouter.svg?style=flat-square
[travis-url]: https://travis-ci.org/nthtran/hashrouter
[coveralls-image]: https://img.shields.io/coveralls/nthtran/hashrouter.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/nthtran/hashrouter?branch=master
[david-image]: http://img.shields.io/david/nthtran/hashrouter.svg?style=flat-square
[david-url]: https://david-dm.org/nthtran/hashrouter
[license-image]: http://img.shields.io/npm/l/hashrouter.svg?style=flat-square
[license-url]: LICENSE