'use strict';

var foo = 'hello world!';

function test () {
  console.log(foo);
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

(function () {
  var arrowFunc = function arrowFunc(string) {
    return string;
  };

  var target = { a: 1, b: 2 };
  var source = { b: 4, c: 5 };

  var returnedTarget = _extends({}, target, source);

  // let happy = 'test';

  console.log(returnedTarget);

  console.log([1, 2, 3].map(function (n) {
    return n + 1;
  }));

  console.log(arrowFunc('working idea'));
  test();
})();
