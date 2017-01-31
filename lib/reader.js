'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Dat = require('./Dat');

var _Dat2 = _interopRequireDefault(_Dat);

var _Datx = require('./Datx');

var _Datx2 = _interopRequireDefault(_Datx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * File: Reader
 * Created by zouyi on 2017/1/31.
 */
var Reader = function () {
  function Reader(filePath, type) {
    (0, _classCallCheck3.default)(this, Reader);
    this._Driver = {
      dat: _Dat2.default,
      datx: _Datx2.default
    };
    this.loader = null;

    if (!this.loader) {
      this.loader = new this._Driver[type]();
      this.loader.load(filePath);
    }
  }

  (0, _createClass3.default)(Reader, [{
    key: 'lookup',
    value: function lookup(ip) {
      return this.loader.lookup(ip);
    }
  }]);
  return Reader;
}();

exports.default = Reader;
module.exports = exports['default'];