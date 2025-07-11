let body = $response.body;
let url = $request.url;

// 检查是否是目标 URL
if (url.match(/^https:\/\/raw\.githubusercontent\.com\/QingRex\/LoonKissSurge\/.*\.sgmodule$/)) {
    // 构造 Egern 格式的 URL
    let egernUrl = `egern:///modules/new?url=${encodeURIComponent(url)}`;
    // 返回重定向响应
    $done({
        status: "HTTP/1.1 302 Found",
        headers: {
            "Location": egernUrl,
            "Content-Type": "text/plain"
        },
        body: "Redirecting to Egern..."
    });
} else {
    // 非目标 URL，原样返回
    $done({ body });
}