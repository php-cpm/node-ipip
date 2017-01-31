/**
 * File: Reader
 * Created by zouyi on 2017/1/31.
 */
import ip from './Dat'
import ipx from './Datx'
class Reader {
  _Driver = {
    dat: ip,
    datx: ipx,
  };
  loader = null;
  
  constructor(filePath, type) {
    if (!this.loader) {
      this.loader = new this._Driver[type];
      this.loader.load(filePath)
    }
  }
  
  lookup(ip) {
    return this.loader.lookup(ip)
  }
  
}

export default Reader