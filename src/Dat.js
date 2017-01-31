/**
 * File: Dat
 * Created by zouyi on 2017/1/31.
 */

import ip from '17mon/ip'

class Dat {
  HEADER_SIZE = 0x400;
  PARTITION_MASK = 0xFF000000;
  RECORD_MASK = 0x00FFFFFF;
  BLOCK_SIZE = 8;
  PARTITION_FACTOR = 22;
  LEN_OFFSET = 7;
  columns = ['country', 'province', 'city'];
  
  load(file) {
    return ip.load(file)
  }
  
  lookup(ipAddr) {
    return ip.findSync(ipAddr)
  }
}

export default Dat