var HttpHash = require('http-hash');
var url = require('url');
var HttpError = require('http-errors');

module.exports = function HashRouter() {
  var hash = HttpHash();

  handleRequest.set = hash.set.bind(hash);

  return handleRequest;

  function handleRequest(path) {
    var pathname = url.parse(path).pathname;

    var route = hash.get(pathname);
    if (route.handler === null) {
      throw HttpError(404, {
        pathname: pathname
      });
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