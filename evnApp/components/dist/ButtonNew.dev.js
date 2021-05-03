"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createButton = void 0;

require("./ButtonNew.css");

var createButton = function createButton(_ref) {
  var _ref$primary = _ref.primary,
      primary = _ref$primary === void 0 ? false : _ref$primary,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      backgroundColor = _ref.backgroundColor,
      label = _ref.label,
      onClick = _ref.onClick;
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  btn.className = ['storybook-button', "storybook-button--".concat(size), mode].join(' ');
  btn.style.backgroundColor = backgroundColor;
  return btn;
};

exports.createButton = createButton;