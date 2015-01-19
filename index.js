var HttpHash = require('http-hash');
var url = require('url');

module.exports = function HashRouter(notFound) {
  var hash = HttpHash();

  match.set = hash.set.bind(hash);

  return match;

  function match(path) {
    var pathname = url.parse(path).pathname;

    var route = hash.get(pathname);
    if (route.handler === null) {
      var fn = notFound || defaultNotFound;
      fn(pathname);
    }

    var opts = {
      params: route.params,
      splat: route.splat
    };

    var args = Array.prototype.slice.call(arguments, 1);
    args.push(opts);

    return route.handler.apply(null, args);
  }
};

function defaultNotFound() {
  throw new Error('Not Found');
}
