"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Colors = exports["default"] = void 0;

require("./colors.css");

var _colors2 = _interopRequireDefault(require("./colors.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Foundation/Colors'
};
exports["default"] = _default;

var Colors = function Colors() {
  return _colors2["default"];
};

exports.Colors = Colors;