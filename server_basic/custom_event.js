//1. 이벤트가 정의되어 있는 events 모듈 생성.
var EventEmitter = require('events')

//2. 생성된 이벤트 모듈을 사용하기 위해 custom_object 초가화
var custom_obj = new EventEmitter()

//3. event 모듈에 선언되어 있는 on() 함수를 재정의하여 caller 이벤트 처리
custom_obj.on('caller', () => {
    console.log('called events!')
})

//4. caller 이벤트를 강제로 발생

custom_obj.emit('caller')
