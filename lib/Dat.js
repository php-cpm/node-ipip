'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ip = require('17mon/ip');

var _ip2 = _interopRequireDefault(_ip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dat = function () {
  function Dat() {
    (0, _classCallCheck3.default)(this, Dat);
    this.HEADER_SIZE = 0x400;
    this.PARTITION_MASK = 0xFF000000;
    this.RECORD_MASK = 0x00FFFFFF;
    this.BLOCK_SIZE = 8;
    this.PARTITION_FACTOR = 22;
    this.LEN_OFFSET = 7;
    this.columns = ['country', 'province', 'city'];
  }

  (0, _createClass3.default)(Dat, [{
    key: 'load',
    value: function load(file) {
      return _ip2.default.load(file);
    }
  }, {
    key: 'lookup',
    value: function lookup(ipAddr) {
      return _ip2.default.findSync(ipAddr);
    }
  }]);
  return Dat;
}(); /**
      * File: Dat
      * Created by zouyi on 2017/1/31.
      */

exports.default = Dat;
module.exports = exports['default'];