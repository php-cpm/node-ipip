'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ipx = require('17mon/ipx');

var _ipx2 = _interopRequireDefault(_ipx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Datx = function () {
  function Datx() {
    (0, _classCallCheck3.default)(this, Datx);
    this.HEADER_SIZE = 0x40000;
    this.PARTITION_MASK = 0xFFFF0000;
    this.RECORD_MASK = 0xFFFFFFFF;
    this.BLOCK_SIZE = 9;
    this.PARTITION_FACTOR = 14;
    this.LEN_OFFSET = 8;
    this.columns = ['country', 'province', 'city', 'organization', 'isp', 'latitude', 'longitude', 'timezone', 'timezone2', 'governcode'];
  }

  (0, _createClass3.default)(Datx, [{
    key: 'load',
    value: function load(file) {
      return _ipx2.default.load(file);
    }
  }, {
    key: 'lookup',
    value: function lookup(ipAddr) {
      return _ipx2.default.findSync(ipAddr);
    }
  }]);
  return Datx;
}(); /**
      * File: Dat
      * Created by zouyi on 2017/1/31.
      */

exports.default = Datx;
module.exports = exports['default'];