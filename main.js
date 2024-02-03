/*

管制执照

[rewrite_local]
https://questionbank.work:59999/questionbankusers url script-response-body https://raw.githubusercontent.com/aaronzbyz/chgflow/main/main.js

[mitm] 
hostname = *questionbank.*

*/

var obj = {
  "__v": 0,
  "date": {
    "全部题库": [
      "Wed Jan 01 2030 23:23:23 GMT+0800 (中国标准时间)",
      "USELESS",
      "Wed Jan 01 1970 23:23:23 GMT+0800 (中国标准时间)"
    ]
  }
};

$done({ body: JSON.stringify(obj) });
