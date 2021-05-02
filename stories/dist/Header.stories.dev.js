"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggedOut = exports.LoggedIn = exports["default"] = void 0;

var _Header = require("./Header");

var _default = {
  title: 'Example/Header',
  argTypes: {
    onLogin: {
      action: 'onLogin'
    },
    onLogout: {
      action: 'onLogout'
    },
    onCreateAccount: {
      action: 'onCreateAccount'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return (0, _Header.createHeader)(args);
};

var LoggedIn = Template.bind({});
exports.LoggedIn = LoggedIn;
LoggedIn.args = {
  user: {}
};
var LoggedOut = Template.bind({});
exports.LoggedOut = LoggedOut;
LoggedOut.args = {};