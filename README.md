# node-ipip [![Build Status](https://travis-ci.org/ChiChou/node-ipip.svg?branch=master)](https://travis-ci.org/ChiChou/node-ipip) [![Coverage Status](https://img.shields.io/coveralls/ChiChou/node-ipip.svg)](https://coveralls.io/r/ChiChou/node-ipip) [![npm version](https://badge.fury.io/js/ipip.svg)](http://badge.fury.io/js/ipip)

[English Document](README.en.md)

适用于 Node.js 的 [ipip.net](http://ipip.net) IP 数据库查询模块。

## 入门

安装依赖项
```
    npm install ipip-ex
```
 - [IP 地址库](http://s.qdcdn.com/17mon/17monipdb.dat) 由 ipip.net（原 17mon） 提供。
 - 每日自动构建，提供开发版本。
 - 与[ChiChou/node-ipip](https://github.com/ChiChou/node-ipip)不完全兼容

代码示例
```
    var ipip = require('ipip-ex')();
    
    // 查询 IP 信息，以字典格式返回
    console.log(ipip.ip('202.195.161.30'));
```
## 文档

### 加载数据库
```
require('ipip-ex')([database])
```
加载 database 指向的数据库，支持 dat 和 datx 格式。默认为免费版的 17monipdb.dat。

例：
```
    require('ipip-ex')('/path/to/your/database.datx')
    require('ipip-ex')({data: '/path/to/file', version: 'datx'})
```
**注意**：加载数据库是一个阻塞调用。

### 查 IP

ip(ip [, format])

**ip**

待查询的 IP 地址，如 `8.8.8.8`

例：
```
    var ip = require('ipip-ex')();
    console.log(ip.ip('8.8.8.8'));
```
**format** 

制定返回数据的格式，可设置为 `array` 或者 `dict`。 

* 免费版（dat 格式）数据包含国家、省份、城市；
* 收费版包含国家、省份、城市、组织、运营商、经度、纬度、时区、行政区域代码。

例：

    console.log(ip.ip('8.8.8.8', ip.FORMAT_DICT));

设为 `array`（缺省）时返回格式如下：
    
    ['国家', '省份', '城市']

设为 `dict` 时返回格式如下：
```
    {
      country: '国家',
      province: '省份',
      city: '城市'
    }
```
## 命令行小工具

安装位全局模块之后，可以在命令行中使用 `ipip` 快速查询 IP 信息：
```
    ➜  ~ ipip 8.8.8.8 202.195.161.30
    Information for 8.8.8.8:
    country: GOOGLE
    province: GOOGLE
    city: N/A
    
    Information for 202.195.161.30:
    country: 中国
    province: 江苏
    city: 镇江
```
## 授权

MIT