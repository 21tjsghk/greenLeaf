var http = require('http')

var url = require('url')

var server = http.createServer(function (request, response) {
    //1. 실제 요청한 주소 전체를 콘솔에 출력
    console.log(request.url)
    var parsedUrl = url.parse(request.url)

    //2. parsing은 url 중에서도 서버 URI 에 해당하는 pathname만 따로 저장함
    var resource = parsedUrl.pathname
    console.log('resource path=%s', resource)

    //3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메시지를 클라이언트에 전달
    if (resource == '/address') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        response.end('서울특별시 구로구 에이스 하이엔드 2차 ')
    } else if (resource == '/phone') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        response.end('010-1234-1234')
    } else if (resource == '/name') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        response.end('Hong Gil Dong')
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        response.end('404 Page Not Found')
    }
})

server.listen(80, function () {
    console.log('Server is running ...  urlll')
})
