/**
 * File: Dat
 * Created by zouyi on 2017/1/31.
 */

import ipx from '17mon/ipx'

class Datx {
  HEADER_SIZE = 0x40000;
  PARTITION_MASK = 0xFFFF0000;
  RECORD_MASK = 0xFFFFFFFF;
  BLOCK_SIZE = 9;
  PARTITION_FACTOR = 14;
  LEN_OFFSET = 8;
  columns = ['country', 'province', 'city', 'organization',
    'isp', 'latitude', 'longitude', 'timezone', 'timezone2', 'governcode'];
  
  load(file) {
    return ipx.load(file)
  }
  
  lookup(ipAddr) {
    return ipx.findSync(ipAddr)
  }
}

export default Datx