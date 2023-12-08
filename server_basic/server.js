var http = require('http')

//2. http모듈로 서버 생성
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end('Hello node.js!!')
})

//3. listen 함수로 8086 포트 서버 실행

server.listen(8086, function () {
    console.log('Server is running...')
})
