'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _reader = require('./reader');

var _reader2 = _interopRequireDefault(_reader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_DATA_PATH = _path2.default.join(__dirname, '..', '17monipdb.dat');

/**
 * IPIP database reader
 * @param {Object|String} opt initialize options
 */

var IPIP = function () {
  function IPIP() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { data: DEFAULT_DATA_PATH, version: 'dat' };
    (0, _classCallCheck3.default)(this, IPIP);
    this._database = null;
    this._version = null;
    this._driver = null;
    this.FORMAT_DICT = 'dict';
    this.FORMAT_ARRAY = 'array';


    if (typeof opt === 'string') {
      this._database = opt;
    } else {
      this._database = opt.data;
    }
    if (!_fs2.default.existsSync(this._database)) {
      throw new Error('Invalid database path');
    }

    this._version = opt.version || this._database.split('.').pop();
    if (!this._version.match(/^datx?$/i)) {
      throw new Error('Invalid database version');
    }
    if (!this._driver) {
      this._driver = new _reader2.default(this._database, this._version);
    }
  }

  /**
   * query information by ip address
   * @param  {String} ip IPv4 address
   * @param format
   * @return {Object|Array}    query result
   */


  (0, _createClass3.default)(IPIP, [{
    key: 'ip',
    value: function ip(_ip, format) {
      var ipInt = 0;
      if (_net2.default.isIPv4(_ip)) {
        ipInt = _ip;
      } else {
        throw new Error('Invalid ip address: ' + _ip);
      }
      var result = this._driver.lookup(ipInt);
      return this._wrap(result, format);
    }

    /**
     * wrap result in given format
     * @param array
     * @param  {String} format
     * @return {Object|Array}
     */

  }, {
    key: '_wrap',
    value: function _wrap(array, format) {
      format = format || 'dict';

      if (array === null) {
        array = this._driver.loader.columns.map(String.prototype.valueOf, 'N/A');
      }

      if (format === this.FORMAT_ARRAY) {
        return array;
      } else if (format === this.FORMAT_DICT) {
        var dict = {};
        this._driver.loader.columns.forEach(function (key, i) {
          dict[key] = array[i] || '';
        });
        return dict;
      } else {
        throw new Error('Invalid param');
      }
    }
  }]);
  return IPIP;
}();

var getIp = function getIp(filePath) {
  return new IPIP(filePath);
};

exports.default = getIp;
module.exports = exports['default'];