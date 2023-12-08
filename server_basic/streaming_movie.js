var http = require('http')
var url = require('url')
var fs = require('fs')

var server = http.createServer(function (request, response) {
    var pasrsedUrl = url.parse(request.url)
    var resource = pasrsedUrl.pathname
    console.log('resource =' + resource)

    var resourcePath = '.' + resource
    console.log('resourcePath=' + resourcePath)

    //html 페이지 요청이 들어왔을 경우는 텍스트 파일 처리
    if (resource.indexOf('/html/') == 0) {
        fs.readFile(resourcePath, 'utf-8', function (error, data) {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/html' })
                response.end('500 Internal Server ' + error)
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' })
                response.end(data)
            }
        })
    } else if (resource.indexOf('/movie/') == 0) {
        // 1. stream 생성
        var stream = fs.createReadStream(resourcePath)
        // 2. 잘게 쪼개진 stream 이 몇번 전송되는지 확인하기 위한 count
        var count = 0
        // 3. 잘게 쪼개진 data를 전송할 수 있으면 data 이벤트 발생
        stream.on('data', function (data) {
            count = count + 1
            console.log('data count =' + count)
            // 3.1 data 이벤트가 발생되면 data를 클라이언트로 전송
            response.write(data)
        })
        stream.on('end', function () {
            console.log('end Streaming')
            response.end()
        })
        stream.on('error', function (err) {
            console.log(err)
            response.end('500 internal Server' + err)
        })
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' })
        response.end('404 Page Not Found')
    }
})

server.listen(80, function () {
    console.log('Server is running...')
})
