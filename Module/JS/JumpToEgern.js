// JumpToEgern.js
let url = $request.url;

// 检查是否是目标 URL
if (url.match(/^https:\/\/raw\.githubusercontent\.com\/QingRex\/LoonKissSurge\/.*\.sgmodule$/)) {
    // 构造 Egern 格式的 URL
    let egernUrl = `egern:///modules/new?url=${encodeURIComponent(url)}`;
    // 直接返回 302 重定向到 Egern 协议
    $done({
        status: "HTTP/1.1 302 Found",
        headers: {
            Location: egernUrl
        }
    });
} else {
    // 非目标 URL，正常返回
    $done({});
}