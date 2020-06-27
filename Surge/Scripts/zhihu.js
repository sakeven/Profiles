# 知乎测试


# zhihu = type=http-response,requires-body=1,max-size=-1,pattern=https:\/\/api\.zhihu.com\/feed-root\/block,script-path=https://raw.githubusercontent.com/sakeven/Profiles/master/
Scripts/zhihu.js

let obj = JSON.parse($response.body);
obj.is_vip = true;
$done({body: JSON.stringify(obj)});
