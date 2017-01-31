import path from 'path'
import net from 'net'
import fs from 'fs'
import Reader from './reader'
const DEFAULT_DATA_PATH = path.join(__dirname, '..', '17monipdb.dat');

/**
 * IPIP database reader
 * @param {Object|String} opt initialize options
 */
class IPIP {
  _database = null;
  _version = null;
  _driver = null;
  FORMAT_DICT = 'dict';
  FORMAT_ARRAY = 'array';
  
  
  constructor(opt = {data: DEFAULT_DATA_PATH, version: 'dat'}) {
    
    if (typeof opt === 'string') {
      this._database = opt;
    } else {
      this._database = opt.data;
    }
    if(!fs.existsSync(this._database)) {
      throw new Error('Invalid database path');
    }
    
    this._version = opt.version || this._database.split('.').pop();
    if (!this._version.match(/^datx?$/i)) {
      throw new Error('Invalid database version');
    }
    if (!this._driver) {
      this._driver = new Reader(this._database, this._version);
    }
  }

  /**
   * query information by ip address
   * @param  {String} ip IPv4 address
   * @param format
   * @return {Object|Array}    query result
   */
  ip(ip, format) {
    var ipInt = 0;
    if (net.isIPv4(ip)) {
      ipInt = ip;
    } else {
      throw new Error('Invalid ip address: ' + ip);
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
  _wrap(array, format) {
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
}

const getIp = (filePath) => {
  return (new IPIP(filePath))
}


export default getIp
