function Clazz() {
    this.name = 'Hello there!'
    this.message
}

// message 변수에 값을 입력하는 함수
Clazz.prototype.setMessage = function (msg) {
    this.message = msg
}
// message 변수의 값을 가져오는 함수
Clazz.prototype.getMessage = function () {
    return this.message
}
