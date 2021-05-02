"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Small = exports.Large = exports.Secondary = exports.Primary = exports["default"] = void 0;

var _Button = require("./Button");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = {
  title: 'Components/ButtonNew',
  argTypes: {
    label: {
      control: 'text'
    },
    primary: {
      control: 'boolean'
    },
    backgroundColor: {
      control: 'color'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    onClick: {
      action: 'onClick'
    }
  }
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var label = _ref.label,
      args = _objectWithoutProperties(_ref, ["label"]);

  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return (0, _Button.createButton)(_objectSpread({
    label: label
  }, args));
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  primary: true,
  label: 'Button'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  label: 'Button'
};
var Large = Template.bind({});
exports.Large = Large;
Large.args = {
  size: 'large',
  label: 'Button'
};
var Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'small',
  label: 'Button'
};