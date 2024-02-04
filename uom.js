/*

UOM

[rewrite_local]
https://uom.caac.gov.cn/api/uom-uavdriver/trained/video/judge url script-response-body https://raw.githubusercontent.com/aaronzbyz/chgflow/main/uom.js

[mitm] 
hostname = *caac.*

*/

var obj = {
  "msg" : "成功",
  "data" : true,
  "code" : 0
};

$done({ body: JSON.stringify(obj) });