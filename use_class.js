// NodeClass를 선언한다. NodeClass는 변수명이 아니라 class명이다.
var NodeClass = require('./NodeClass')
//new 연산자로 NodeClass클래스를 nodeClass 변수로 초기화한다.
var nodeClass = new NodeClass()

//setMassage 함수로 값을 입력한다.
nodeClass.setMessage('Good to See You')

//입력한 값 출력
console.log(nodeClass.getMessage())
