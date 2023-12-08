var http = require('http')
var querystring = require('querystring')

var server = http.createServer(function (request, response) {
    //1. post 로 전달된 데이터를 담을 변수 선언
    var postdata = ''

    //2. requset 객체에 on() 함수로 'data'이번트를 연결
    request.on('data', function (data) {
        //3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
        postdata = postdata + data
    })

    //4. request 객체에 on() 함수로 'end' 이벤트를 연결
    request.on('end', function () {
        //5. end 이벤트가 발생하면 3번에서 저장 해 둔 postdata를 queryString으로 객체화
        var parsedQuery = querystring.parse(postdata)
        //6. 객체화 된 데이터를 로그로 출력
        console.log(parsedQuery)
        // 7. 성공 HEADER 와 데이터를 담아서 클라이언트에 응답처리
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end('값 = ' + parsedQuery)
    })
})

server.listen(8086, function () {
    console.log('Server is running...')
})
