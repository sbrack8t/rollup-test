(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.bundled = {}));
}(this, function (exports) { 'use strict';

  const myFunction = () => {
    console.log('hello world');
  };

  exports.myFunction = myFunction;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
