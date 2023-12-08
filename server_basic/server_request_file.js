var http = require('http')
var url = require('url')
var fs = require('fs')

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url)
    var resource = parsedUrl.pathname

    if (resource == '/hello') {
        // 2. hello 파일을 읽은 후
        fs.readFile('hello.html', 'utf-8', function (error, data) {
            //2.1 읽으면서 오류가 발생하면 오류의 내용을
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
                response.end('500 Internet Server Error : ' + error)
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                response.end(data)
            }
        })
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        response.end('404 Page Not Found')
    }
})

server.listen(80, function () {
    console.log('Server is running ...')
})
