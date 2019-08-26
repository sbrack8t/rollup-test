(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  (function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
  }(function () {
    var foo = 'hello world!';

    function main() {
      console.log(foo);
    }

    module.exports = main;

  }));

}));
